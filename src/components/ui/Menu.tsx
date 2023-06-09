import { getServerSession } from 'next-auth';

import AvatarButton from '@/components/ui/AvatarButton';
import LogoButton from '@/components/ui/LogoButton';
import SignOutButton from '@/components/ui/SignOutButton';
import { authOptions } from '@/database/options';

export default async function Menu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-gray-200">
      <div className="flex h-16 items-center justify-between">
        <LogoButton />

        {session && <SignOutButton />}

        <AvatarButton />
      </div>
    </nav>
  );
}
