import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import Button from '@/components/Button';
import CreateReminderForm from '@/components/CreateReminderForm';
import Reminder from '@/components/Reminder';
import { authOptions } from '@/database/options';
import { getReminderList } from '@/services/ReminderList';

interface ReminderProps {
  params: {
    id: string;
  };
}

export default async function ReminderList({ params: { id } }: ReminderProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/signin?redirect=/dashboard/reminders${id}`);
  }

  const { reminderList } = await getReminderList(id);

  return (
    <main>
      <h3>Reminder list: {reminderList?.title}</h3>

      <p>Logged in as: {session.user.email}</p>

      <CreateReminderForm reminderListId={id} />

      {reminderList && reminderList.reminders.length > 0 ? (
        <ul>
          {reminderList.reminders.map((reminder) => (
            <Reminder key={reminder.id} reminder={reminder} />
          ))}
        </ul>
      ) : (
        <p>No reminders</p>
      )}

      <Button href="/dashboard/reminders">Go to reminders</Button>
    </main>
  );
}
