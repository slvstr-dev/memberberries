import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export function generateStaticParams() {
  const reminders = [{ id: '1' }];

  return reminders.map((reminder) => {
    return {
      id: reminder.id,
    };
  });
}

interface ReminderProps {
  params: {
    id: string;
  };
}

export default async function Reminder({ params: { id } }: ReminderProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/signin?redirect=/reminders/${id}`);
  }

  return (
    <main>
      <h3>Reminder</h3>

      <p>{`Reminder: ${id}`}</p>
    </main>
  );
}
