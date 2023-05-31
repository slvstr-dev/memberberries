'use client';

import { useSession } from 'next-auth/react';

import SignInButtons from '@Components/SignInButtons';

export default function Account() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <main>
      <h3>Account</h3>

      <p>Logged in as: {session?.user?.email}</p>

      <SignInButtons />
    </main>
  );
}
