import { getServerSession } from 'next-auth/next';

import Button from '@/components/ui/Button';
import { authOptions } from '@/database/options';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-5xl font-bold">Memberberries</h1>

      {session ? (
        <Button href="/signin" color="primary" padding="md">
          Go to dashboard
        </Button>
      ) : (
        <Button href="/dashboard" color="primary" padding="md">
          Sign in
        </Button>
      )}
    </main>
  );
}
