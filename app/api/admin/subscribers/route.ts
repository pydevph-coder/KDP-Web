import { NextResponse } from 'next/server';
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
    const subscribers = await prisma.emailSubscriber.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      subscribers.map((s) => ({
        id: s.id,
        email: s.email,
        createdAt: s.createdAt,
      })),
    );
  } catch (error) {
    console.error('Failed to fetch subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 },
    );
  }
}


