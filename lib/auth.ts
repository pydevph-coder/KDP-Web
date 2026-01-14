import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requireAuth() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin-auth');

  if (!auth || auth.value !== 'authenticated') {
    redirect('/admin/login');
  }
}

