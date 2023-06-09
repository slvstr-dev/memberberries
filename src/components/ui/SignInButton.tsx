'use client';

import { useSearchParams } from 'next/navigation';

import { signIn, useSession } from 'next-auth/react';

import Button from '@/components/ui/Button';
import type { authProviders } from '@/database/options';

interface SignOutButtonProps {
  provider: (typeof authProviders)[number];
}

export default function SignOutButton({ provider }: SignOutButtonProps) {
  const { status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('redirect') ?? '/dashboard';

  const handleSignIn = () => {
    void signIn(provider, { callbackUrl });
  };

  return (
    <Button onClick={handleSignIn} disabled={status === 'loading'} color="primary" padding="lg">
      Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </Button>
  );
}
