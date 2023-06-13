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
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-5xl font-bold">Sign in</h1>

      <p className="mb-4">Choose a provider to sign in with.</p>

      <div className="flex flex-col gap-2">
        <SignInButton provider="github" />

        <SignInButton provider="google" />
      </div>
    </div>
  );
}
