'use client';

import Image from 'next/image';

import { useSession } from 'next-auth/react';

export default function AvatarButton() {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }

  if (session.user.image) {
    return (
      <Image
        className="h-8 w-8 rounded-full transition-opacity hover:opacity-50"
        src={session.user.image}
        width={32}
        height={32}
        alt=""
      />
    );
  }

  return <div className="h-8 w-8 rounded-full bg-gray-800 transition-opacity hover:opacity-50" />;
}
