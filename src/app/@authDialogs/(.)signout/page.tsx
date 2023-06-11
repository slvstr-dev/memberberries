'use client';

import React from 'react';

import { redirect } from 'next/navigation';

import { useSession } from 'next-auth/react';

import Dialog from '@/components/ui/Dialog';
import SignOutButton from '@/components/ui/SignOutButton';
import { useBoolean } from '@/hooks/useBoolean';

export default function SignOutDialog() {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(true);

  const { data: session } = useSession();

  if (!session) {
    redirect('/');
  }

  return (
    <Dialog
      isOpen={isOpen}
      setOpen={setOpen}
      title="Are you sure?"
      onClose={setClosed}
      hasCloseButton={false}>
      <p className="mb-4">You will be signed out of your account.</p>

      <SignOutButton />
    </Dialog>
  );
}
