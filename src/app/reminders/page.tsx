import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Reminders() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?redirect=/reminders');
  }

  return (
    <main>
      <h3>Reminders</h3>

      <p>Logged in as: {session.user?.email}</p>
    </main>
  );
}
