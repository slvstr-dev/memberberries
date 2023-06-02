import Link from 'next/link';

import AvatarButton from './AvatarButton';

export default function Menu() {
  return (
    <nav className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold transition-opacity hover:opacity-50">
              Memberberries
            </h1>
          </Link>

          <Link className="justify-self-end" href="/dashboard">
            <AvatarButton />
          </Link>
        </div>
      </div>
    </nav>
  );
}
