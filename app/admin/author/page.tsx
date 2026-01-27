import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AuthorForm from '@/components/admin/AuthorForm';

export default async function AdminAuthorPage() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Author Settings</h1>
          <a href="/admin" className="text-primary-1 hover:text-primary-2 text-sm">
            ← Back to Dashboard
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <AuthorForm />
        </div>
      </div>
    </div>
  );
}


