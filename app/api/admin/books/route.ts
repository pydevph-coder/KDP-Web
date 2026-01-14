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
    const books = await prisma.book.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch books' },
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
    const book = await prisma.book.create({
      data: {
        title: data.title,
        coverImage: data.coverImage,
        description: data.description,
        amazonLink: data.amazonLink,
        benefits: data.benefits || [],
        featured: data.featured || false,
        order: data.order || 0,
      },
    });
    return NextResponse.json(book);
  } catch (error) {
    console.error('Create book error:', error);
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    );
  }
}

