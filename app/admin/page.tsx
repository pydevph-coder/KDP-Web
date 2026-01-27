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
        <div className="flex justify-between items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">Admin Dashboard</h1>
          <a href="/admin/logout" className="bg-white hover:bg-background-2 active:bg-background-2 text-primary-1 font-semibold py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-full transition-all duration-300 border-2 border-primary-1 hover:border-primary-2 active:scale-95 text-xs sm:text-sm md:text-base">
            Logout
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <Link
            href="/admin/books"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Manage Books</h2>
            <p className="text-sm sm:text-base text-text-primary/70">Add, edit, or delete books</p>
          </Link>

          <Link
            href="/admin/statistics"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Statistics</h2>
            <p className="text-sm sm:text-base text-text-primary/70">View clicks and analytics</p>
          </Link>

          <Link
            href="/admin/testimonials"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 md:col-span-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Testimonials</h2>
            <p className="text-sm sm:text-base text-text-primary/70">Manage customer reviews</p>
          </Link>

          <Link
            href="/admin/newsletter"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Newsletter</h2>
            <p className="text-sm sm:text-base text-text-primary/70">
              Email subscribers with updates, images, and free PDFs
            </p>
          </Link>

          <Link
            href="/admin/subscribers"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Subscribers</h2>
            <p className="text-sm sm:text-base text-text-primary/70">
              View all subscriber emails and subscription dates
            </p>
          </Link>

          <Link
            href="/admin/author"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Author</h2>
            <p className="text-sm sm:text-base text-text-primary/70">
              Edit author bio, credentials, and photo
            </p>
          </Link>

          <Link
            href="/admin/gallery"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Image Gallery</h2>
            <p className="text-sm sm:text-base text-text-primary/70">
              Browse uploaded images, copy URLs, and upload new assets
            </p>
          </Link>

          <Link
            href="/admin/site"
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Site Settings</h2>
            <p className="text-sm sm:text-base text-text-primary/70">
              Manage site title, description, meta image, and pagination
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

