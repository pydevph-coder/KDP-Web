import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ImageGallery from '@/components/admin/ImageGallery';

export default async function AdminGallery() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Image Gallery</h1>
            <p className="text-sm text-text-primary/70 mt-1">
              View all uploaded images, copy their URLs, and upload new assets to reuse across the
              site.
            </p>
          </div>
          <a href="/admin" className="text-primary-1 hover:text-primary-2 text-sm">
            ← Back to Dashboard
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}


