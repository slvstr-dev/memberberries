import Image from 'next/image';

import { getServerSession } from 'next-auth/next';

import Button from '@/components/ui/Button';
import { authOptions } from '@/database/options';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-full items-center gap-20">
      <div>
        <h1 className="mb-5 text-5xl font-semibold">Memberberries</h1>

        <p className="mb-10 text-xl text-gray-600">
          Personal task manager to &apos;member your daily tasks.
        </p>

        {session ? (
          <Button href="/signin" color="primary" padding="xl">
            Go to dashboard
          </Button>
        ) : (
          <Button href="/dashboard" color="primary" padding="xl">
            Sign in
          </Button>
        )}
      </div>

      <div className="relative w-full max-w-lg">
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-blob rounded-full bg-blue-400 opacity-40 mix-blend-multiply blur-2xl" />

        <div className="animation-delay-2000 absolute -right-20 top-0 h-96 w-96 animate-blob rounded-full bg-red-400 opacity-40 mix-blend-multiply blur-2xl" />

        <div className="animation-delay-4000 absolute left-20 top-20 h-96 w-96 animate-blob rounded-full bg-amber-400 opacity-40 mix-blend-multiply blur-2xl" />

        <div className="relative flex flex-col gap-4">
          <div className=" flex items-center gap-4 rounded-md bg-white p-8">
            <Image src="svg/xmark.svg" width="18" height="18" alt="List" />

            <p className="text-lg font-semibold text-gray-600">Lorem Ipsum</p>
          </div>

          <div className=" flex items-center gap-4 rounded-md bg-white p-8">
            <Image src="svg/xmark.svg" width="18" height="18" alt="List" />

            <p className="text-lg font-semibold text-gray-600">Lorem Ipsum</p>
          </div>

          <div className=" flex items-center gap-4 rounded-md bg-white p-8">
            <Image src="svg/xmark.svg" width="18" height="18" alt="List" />

            <p className="text-lg font-semibold text-gray-600">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
