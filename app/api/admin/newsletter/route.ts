import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import path from 'path';
import fs from 'fs/promises';
import { sendNewsletterEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // Simple auth check for admin
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin-auth');

  if (!auth || auth.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const tempFilePaths: string[] = [];

  try {
    const { subject, html, attachments, onlyEmails } = await request.json();

    if (!subject || !html) {
      return NextResponse.json(
        { error: 'Subject and message are required' },
        { status: 400 },
      );
    }

    const where =
      Array.isArray(onlyEmails) && onlyEmails.length > 0
        ? { email: { in: onlyEmails as string[] } }
        : undefined;

    const subscribers = await prisma.emailSubscriber.findMany({
      where,
    });
    const recipientEmails = subscribers.map((s) => s.email);

    if (recipientEmails.length === 0) {
      return NextResponse.json(
        { error: 'No subscribers found' },
        { status: 400 },
      );
    }

    const attachmentEntries: { path: string; filename: string }[] = [];

    if (Array.isArray(attachments)) {
      for (const att of attachments) {
        if (att?.publicPath) {
          const publicPath = String(att.publicPath);
          const filename = att.filename || publicPath.split('/').pop() || 'attachment';
          const fullPath = path.join(
            process.cwd(),
            'public',
            publicPath.replace(/^\/+/, ''),
          );
          attachmentEntries.push({ path: fullPath, filename });
        } else if (att?.tempFilename) {
          const uploadsDir = path.join(process.cwd(), 'tmp', 'newsletter-uploads');
          const tempPath = path.join(uploadsDir, String(att.tempFilename));
          const filename = att.filename || 'attachment';
          tempFilePaths.push(tempPath);
          attachmentEntries.push({ path: tempPath, filename });
        }
      }
    }

    await sendNewsletterEmail({
      to: recipientEmails,
      subject,
      html,
      attachments: attachmentEntries,
    });

    return NextResponse.json({ success: true, sentTo: recipientEmails.length });
  } catch (error) {
    console.error('Newsletter send error:', error);
    return NextResponse.json(
      { error: 'Failed to send newsletter' },
      { status: 500 },
    );
  } finally {
    await Promise.all(
      tempFilePaths.map(async (p) => {
        try {
          await fs.unlink(p);
        } catch (err) {
          console.warn('Failed to delete temp newsletter attachment:', err);
        }
      }),
    );
  }
}


