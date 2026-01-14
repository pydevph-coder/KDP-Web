import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const author = await prisma.author.findFirst();
    return NextResponse.json(author);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch author' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    
    // Check if author exists
    const existing = await prisma.author.findFirst();
    
    if (existing) {
      const author = await prisma.author.update({
        where: { id: existing.id },
        data: {
          name: data.name,
          bio: data.bio,
          photo: data.photo || null,
          credentials: data.credentials || null,
        },
      });
      return NextResponse.json(author);
    } else {
      const author = await prisma.author.create({
        data: {
          name: data.name,
          bio: data.bio,
          photo: data.photo || null,
          credentials: data.credentials || null,
        },
      });
      return NextResponse.json(author);
    }
  } catch (error) {
    console.error('Author update error:', error);
    return NextResponse.json(
      { error: 'Failed to save author' },
      { status: 500 }
    );
  }
}

