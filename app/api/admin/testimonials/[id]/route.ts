import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await requireAuth();

  try {
    const data = await request.json();
    const testimonial = await prisma.testimonial.update({
      where: { id: params.id },
      data: {
        name: data.name,
        text: data.text,
        rating: data.rating || 5,
        featured: data.featured || false,
      },
    });
    return NextResponse.json(testimonial);
  } catch (error) {
    console.error('Update testimonial error:', error);
    return NextResponse.json(
      { error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await requireAuth();

  try {
    await prisma.testimonial.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}

