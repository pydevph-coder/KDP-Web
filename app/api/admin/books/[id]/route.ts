import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const book = await prisma.book.findUnique({
      where: { id: params.id },
    });

    if (!book) {
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(book);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch book' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const book = await prisma.book.update({
      where: { id: params.id },
      data: {
        title: data.title,
        slug: data.slug !== undefined ? data.slug : undefined,
        coverImage: data.coverImage,
        description: data.description,
        introduction: data.introduction !== undefined ? data.introduction : undefined,
        amazonLink: data.amazonLink,
        painPoints: data.painPoints !== undefined ? data.painPoints : undefined,
        painPointsHeader: data.painPointsHeader !== undefined ? data.painPointsHeader : undefined,
        benefits: data.benefits !== undefined ? data.benefits : undefined,
        benefitsHeader: data.benefitsHeader !== undefined ? data.benefitsHeader : undefined,
        features: data.features !== undefined ? data.features : undefined,
        featuresHeader: data.featuresHeader !== undefined ? data.featuresHeader : undefined,
        targetAudience: data.targetAudience !== undefined ? data.targetAudience : undefined,
        targetAudienceHeader: data.targetAudienceHeader !== undefined ? data.targetAudienceHeader : undefined,
        faithMessage: data.faithMessage !== undefined ? data.faithMessage : undefined,
        faithMessageHeader: data.faithMessageHeader !== undefined ? data.faithMessageHeader : undefined,
        featured: data.featured !== undefined ? data.featured : undefined,
        order: data.order !== undefined ? data.order : undefined,
      },
    });
    return NextResponse.json(book);
  } catch (error) {
    console.error('Update book error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to update book';
    // Return detailed error for debugging
    return NextResponse.json(
      { error: `Failed to update book: ${errorMessage}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await prisma.book.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete book' },
      { status: 500 }
    );
  }
}

