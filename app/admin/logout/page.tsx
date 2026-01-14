'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch('/api/admin/logout', { method: 'POST' });
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        router.push('/admin/login');
      }
    };
    logout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-1">
      <p className="text-text-primary">Logging out...</p>
    </div>
  );
}

