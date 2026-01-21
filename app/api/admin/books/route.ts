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
    console.error('Failed to fetch books:', error);
    // Return empty array instead of error object to prevent frontend crashes
    // If tables don't exist, return empty array so UI can render
    return NextResponse.json([]);
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
        slug: data.slug || null,
        coverImage: data.coverImage,
        description: data.description,
        introduction: data.introduction || null,
        introductionHeader: data.introductionHeader || null,
        introductionBodyMd: data.introductionBodyMd || null,
        amazonLink: data.amazonLink,
        painPoints: data.painPoints || [],
        painPointsHeader: data.painPointsHeader || null,
        painPointsBodyMd: data.painPointsBodyMd || null,
        benefits: data.benefits || [],
        benefitsHeader: data.benefitsHeader || null,
        benefitsBodyMd: data.benefitsBodyMd || null,
        features: data.features || [],
        featuresHeader: data.featuresHeader || null,
        featuresBodyMd: data.featuresBodyMd || null,
        targetAudience: data.targetAudience || [],
        targetAudienceHeader: data.targetAudienceHeader || null,
        targetAudienceBodyMd: data.targetAudienceBodyMd || null,
        faithMessage: data.faithMessage || null,
        faithMessageHeader: data.faithMessageHeader || null,
        faithMessageBodyMd: data.faithMessageBodyMd || null,
        featured: data.featured || false,
        order: data.order || 0,
      },
    });
    return NextResponse.json(book);
  } catch (error) {
    console.error('Create book error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create book';
    // Return detailed error for debugging
    return NextResponse.json(
      { error: `Failed to create book: ${errorMessage}` },
      { status: 500 }
    );
  }
}

