import { requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import SubscribersTableWithEmail from '@/components/admin/SubscribersTableWithEmail';

export default async function AdminSubscribers() {
  try {
    await requireAuth();
  } catch {
    redirect('/admin/login');
  }

  const subscribers = await prisma.emailSubscriber.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-background-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-text-primary">Subscribers</h1>
            <p className="text-sm text-text-primary/70 mt-1">
              View subscribers and send emails to everyone or only selected people.
            </p>
          </div>
          <a href="/admin" className="text-primary-1 hover:text-primary-2 text-sm">
            ← Back to Dashboard
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
          <SubscribersTableWithEmail
            subscribers={subscribers.map((s) => ({
              id: s.id,
              email: s.email,
              createdAt:
                s.createdAt instanceof Date
                  ? s.createdAt.toISOString()
                  : (s.createdAt as unknown as string),
            }))}
          />
        </div>
      </div>
    </div>
  );
}


