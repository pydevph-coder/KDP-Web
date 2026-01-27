import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin-auth');

  if (!auth || auth.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const files = formData
      .getAll('file')
      .filter((f): f is File => f instanceof File);

    if (!files.length) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), 'tmp', 'newsletter-uploads');
    await fs.mkdir(uploadsDir, { recursive: true });

    const savedFiles = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const uniqueName = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}-${safeName}`;
        const fullPath = path.join(uploadsDir, uniqueName);

        await fs.writeFile(fullPath, buffer);

        return {
          tempFilename: uniqueName,
          originalName: file.name,
        };
      }),
    );

    return NextResponse.json({
      files: savedFiles,
    });
  } catch (error) {
    console.error('Upload attachment error:', error);
    return NextResponse.json(
      { error: 'Failed to upload attachment' },
      { status: 500 },
    );
  }
}


