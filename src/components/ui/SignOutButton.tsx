'use client';

import { signOut, useSession } from 'next-auth/react';

import Button from '@/components/ui/Button';

const handleSignOut = () => {
  void signOut({ callbackUrl: '/' });
};

export default function SignOutButton() {
  const { status } = useSession();

  return (
    <Button onClick={handleSignOut} disabled={status === 'loading'} color="primary" padding="lg">
      Sign out
    </Button>
  );
}
