'use server';

import { prisma } from './prisma';

export async function trackClick(link: string, source: string, bookId?: string) {
  try {
    await prisma.click.create({
      data: {
        link,
        source,
        bookId: bookId || null,
      },
    });
  } catch (error) {
    console.error('Error tracking click:', error);
  }
}

