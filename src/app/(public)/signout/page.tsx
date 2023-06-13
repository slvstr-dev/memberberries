import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import SignOutButton from '@/components/ui/SignOutButton';
import { authOptions } from '@/database/options';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-5xl font-bold">Sign out</h1>

      <p className="mb-4">You will be signed out of your account.</p>

      <SignOutButton />
    </div>
  );
}
