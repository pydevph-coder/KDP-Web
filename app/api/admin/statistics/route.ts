import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  await requireAuth();

  try {
    const [
      totalClicks,
      clicksBySource,
      clicksByBook,
      totalSubscribers,
      recentClicks,
    ] = await Promise.all([
      prisma.click.count(),
      prisma.click.groupBy({
        by: ['source'],
        _count: true,
      }),
      prisma.click.groupBy({
        by: ['bookId'],
        _count: true,
        where: {
          bookId: { not: null },
        },
      }),
      prisma.emailSubscriber.count(),
      prisma.click.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
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
      clicksByBook.map(async (item) => {
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

    return NextResponse.json({
      totalClicks,
      clicksBySource: clicksBySource.map((item) => ({
        source: item.source,
        count: item._count,
      })),
      clicksByBook: clicksByBookWithTitles.filter(Boolean),
      totalSubscribers,
      recentClicks: recentClicks.map((click) => ({
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

