import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import NewsletterSender from '@/components/admin/NewsletterSender';

export default async function AdminNewsletter() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary">Newsletter</h1>
          <a href="/admin" className="text-primary-1 hover:text-primary-2">
            ← Back to Dashboard
          </a>
        </div>
        <NewsletterSender />
      </div>
    </div>
  );
}


