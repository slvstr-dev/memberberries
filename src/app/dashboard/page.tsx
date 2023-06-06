import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/database/options';

export default async function Reminders() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  return <section>Todo: show all reminders</section>;
}
