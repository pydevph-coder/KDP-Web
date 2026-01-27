import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

type ClicksBySourceItem = {
  source: string;
  _count: number;
};

type ClicksByBookItem = {
  bookId: string | null;
  _count: number;
};

type RecentClickItem = {
  id: string;
  link: string;
  source: string;
  createdAt: Date;
  book?: { title: string } | null;
};

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');

    let dateFilter: { createdAt?: { gte?: Date; lte?: Date } } = {};

    if (startDateParam || endDateParam) {
      const gte = startDateParam ? new Date(startDateParam) : undefined;
      const lte = endDateParam ? new Date(endDateParam) : undefined;

      if (gte || lte) {
        dateFilter.createdAt = {};
        if (gte) dateFilter.createdAt.gte = gte;
        if (lte) {
          // Include the whole end date by setting time to end of day
          lte.setHours(23, 59, 59, 999);
          dateFilter.createdAt.lte = lte;
        }
      }
    }

    const [
      totalClicks,
      clicksBySource,
      clicksByBook,
      totalSubscribers,
      recentClicks,
    ] = await Promise.all([
      prisma.click.count({
        where: dateFilter,
      }),
      prisma.click.groupBy({
        by: ['source'],
        _count: true,
        where: dateFilter,
      }),
      prisma.click.groupBy({
        by: ['bookId'],
        _count: true,
        where: {
          bookId: { not: null },
          ...dateFilter,
        },
      }),
      prisma.emailSubscriber.count(),
      prisma.click.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        where: dateFilter,
        include: {
          book: {
            select: {
              title: true,
            },
          },
        },
      }),
    ]);

    // Get book titles for clicks by book
    const clicksByBookWithTitles = await Promise.all(
      clicksByBook.map(async (item: ClicksByBookItem) => {
        if (!item.bookId) return null;
        const book = await prisma.book.findUnique({
          where: { id: item.bookId },
          select: { title: true },
        });
        return {
          bookId: item.bookId,
          bookTitle: book?.title || 'Unknown',
          count: item._count,
        };
      })
    );

    const clicksByBookClean = clicksByBookWithTitles.filter(
      (x): x is NonNullable<typeof x> => Boolean(x)
    );

    return NextResponse.json({
      totalClicks,
      clicksBySource: (clicksBySource as ClicksBySourceItem[]).map((item) => ({
        source: item.source,
        count: item._count,
      })),
      clicksByBook: clicksByBookClean,
      totalSubscribers,
      recentClicks: (recentClicks as RecentClickItem[]).map((click) => ({
        id: click.id,
        link: click.link,
        source: click.source,
        bookTitle: click.book?.title || null,
        createdAt: click.createdAt,
      })),
    });
  } catch (error) {
    console.error('Statistics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}