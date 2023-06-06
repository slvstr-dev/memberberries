'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

interface AvatarButtonProps {
  className?: string;
}

export default function AvatarButton({ ...props }: AvatarButtonProps) {
  const { data: session } = useSession();

  return (
    <Link href="/dashboard" {...props}>
      {session?.user.image ? (
        <Image
          className="h-8 w-8 rounded-full transition-opacity hover:opacity-50"
          src={session.user.image}
          width={32}
          height={32}
          alt=""
        />
      ) : (
        <div className="h-8 w-8 rounded-full bg-gray-800 transition-opacity hover:opacity-50" />
      )}
    </Link>
  );
}
