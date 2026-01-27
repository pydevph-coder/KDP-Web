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
    const config = await prisma.siteConfig.findFirst();
    return NextResponse.json(config ?? {});
  } catch (error) {
    console.error('Admin site config GET error:', error);
    return NextResponse.json(
      { error: 'Failed to load site config' },
      { status: 500 },
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
    const body = await request.json();
    const { siteTitle, siteDescription, shortDescription, metaImageUrl, pagination } = body;

    if (!siteTitle || !siteDescription) {
      return NextResponse.json(
        { error: 'Site title and description are required' },
        { status: 400 },
      );
    }

    const parsedPagination =
      typeof pagination === 'number'
        ? pagination
        : parseInt(String(pagination || '10'), 10) || 10;

    const existing = await prisma.siteConfig.findFirst();

    const data = {
      siteTitle,
      siteDescription,
      shortDescription: shortDescription || null,
      metaImageUrl: metaImageUrl || null,
      pagination: parsedPagination,
    };

    const config = existing
      ? await prisma.siteConfig.update({
          where: { id: existing.id },
          data,
        })
      : await prisma.siteConfig.create({ data });

    return NextResponse.json(config);
  } catch (error) {
    console.error('Admin site config POST error:', error);
    return NextResponse.json(
      { error: 'Failed to save site config' },
      { status: 500 },
    );
  }
}


