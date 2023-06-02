'use client';

import { signOut, useSession } from 'next-auth/react';

import Button from '@/components/ui/Button';

export default function SignOutButton() {
  const { status } = useSession();

  return (
    <Button onClick={() => void signOut({ callbackUrl: '/' })} disabled={status === 'loading'}>
      Sign out
    </Button>
  );
}
