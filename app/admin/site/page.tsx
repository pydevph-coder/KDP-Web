import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import SiteConfigForm from '@/components/admin/SiteConfigForm';

export default async function AdminSiteSettings() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Site Settings</h1>
            <p className="text-sm text-text-primary/70 mt-1">
              Manage your site title, description, social meta image, and pagination.
            </p>
          </div>
          <a href="/admin" className="text-primary-1 hover:text-primary-2 text-sm">
            ← Back to Dashboard
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <SiteConfigForm />
        </div>
      </div>
    </div>
  );
}


