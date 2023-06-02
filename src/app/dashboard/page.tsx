'use client';

import Image from 'next/image';

import { useSession } from 'next-auth/react';

import Button from '@/components/Button';
import SignInButtons from '@/components/SignInButtons';

export default function Dashboard() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <main>
      <h3>Dashboard</h3>

      <p>Logged in as: {session?.user.name}</p>

      <p>Email: {session?.user.email}</p>

      {session?.user.image && (
        <Image src={session.user.image} alt="Profile picture" width={100} height={100} />
      )}

      <SignInButtons />

      <Button href="/dashboard/reminders">Go to reminders</Button>
    </main>
  );
}
