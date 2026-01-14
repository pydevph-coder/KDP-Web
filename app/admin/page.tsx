import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminDashboard() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary">Admin Dashboard</h1>
          <a href="/admin/logout" className="btn-secondary">
            Logout
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/books"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2">Manage Books</h2>
            <p className="text-text-primary/70">Add, edit, or delete books</p>
          </Link>

          <Link
            href="/admin/statistics"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2">Statistics</h2>
            <p className="text-text-primary/70">View clicks and analytics</p>
          </Link>

          <Link
            href="/admin/testimonials"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2">Testimonials</h2>
            <p className="text-text-primary/70">Manage customer reviews</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

