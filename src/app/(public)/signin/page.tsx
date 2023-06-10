import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import SignInButton from '@/components/ui/SignInButton';
import { authOptions } from '@/database/options';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold">Sign in</h1>

      <div className="flex flex-col gap-2">
        <SignInButton provider="github" />

        <SignInButton provider="google" />
      </div>
    </div>
  );
}
