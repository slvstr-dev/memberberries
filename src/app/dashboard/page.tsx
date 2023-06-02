import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import Button from '@/components/ui/Button';
import SignOutButton from '@/components/ui/SignOutButton';
import { authOptions } from '@/database/options';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  return (
    <main>
      <h3>Dashboard</h3>

      <p>Logged in as: {session.user.name}</p>

      <p>Email: {session.user.email}</p>

      {session.user.image && (
        <Image src={session.user.image} alt="Profile picture" width={100} height={100} />
      )}

      <SignOutButton />

      <Button href="/dashboard/reminders">Go to reminders</Button>
    </main>
  );
}
