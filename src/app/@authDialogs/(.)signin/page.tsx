'use client';

import React from 'react';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

import Dialog from '@/components/ui/Dialog';
import SignInButton from '@/components/ui/SignInButton';
import { useBoolean } from '@/hooks/useBoolean';

export default function SignInDialog() {
  const { value: isOpen, setFalse: setClosed } = useBoolean(true);

  const { data: session } = useSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <Dialog isOpen={isOpen} title="Sign in" onClose={setClosed} hasCloseButton={false}>
      <p className="mb-4">Choose a provider to sign in with.</p>

      <div className="flex flex-col gap-2">
        <SignInButton provider="github" />

        <SignInButton provider="google" />
      </div>
    </Dialog>
  );
}
