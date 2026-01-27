import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'book-covers';

    const { data, error } = await supabase.storage.from('book-images').list(folder, {
      limit: 200,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (error) {
      console.error('Supabase list error:', error);
      return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
    }

    const files =
      data?.map((file) => {
        const path = `${folder}/${file.name}`;
        const { data: urlData } = supabase.storage.from('book-images').getPublicUrl(path);
        return {
          name: file.name,
          path,
          url: urlData.publicUrl,
          createdAt: file.created_at ?? null,
          size: file.metadata?.size ?? null,
        };
      }) ?? [];

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Admin images error:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
}


