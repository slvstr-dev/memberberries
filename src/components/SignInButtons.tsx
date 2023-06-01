'use client';

import { useSearchParams } from 'next/navigation';

import { signIn, signOut, useSession } from 'next-auth/react';

import Button from '@/components/Button';

export default function SignInButtons() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('redirect') ?? '/account';

  if (status === 'loading') return <div>loading...</div>;

  if (session) {
    return <Button onClick={() => void signOut({ callbackUrl: '/' })}>Sign out</Button>;
  }

  return (
    <>
      <Button onClick={() => void signIn('google', { callbackUrl })}>Sign in with Google</Button>

      <Button onClick={() => void signIn('github', { callbackUrl })}>Sign in with GitHub</Button>
    </>
  );
}
