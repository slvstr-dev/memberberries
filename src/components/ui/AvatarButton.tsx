import Image from 'next/image';

import { getServerSession } from 'next-auth';

import Button from '@/components/ui/Button';
import { authOptions } from '@/database/options';

export default async function AvatarButton() {
  const session = await getServerSession(authOptions);

  return (
    <Button className="flex flex-col items-center gap-1 rounded-md p-2" href="/signout">
      {session?.user.image ? (
        <Image
          className="h-8 w-8 rounded-full"
          src={session.user.image}
          width={32}
          height={32}
          alt=""
        />
      ) : (
        <div className="h-8 w-8 rounded-full bg-gray-800" />
      )}

      {session && <p className="text-sm">{session.user.name}</p>}

      <p className="text-xs text-gray-500">Sign out</p>
    </Button>
  );
}
