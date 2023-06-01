import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CreateReminderForm from '@/components/CreateReminderForm';
import Reminder from '@/components/Reminder';
import { getReminders } from '@/services/Reminder';

export default async function Reminders() {
  const session = await getServerSession(authOptions);
  const { reminders } = await getReminders();

  if (!session) {
    redirect('/signin?redirect=/reminders');
  }

  return (
    <main>
      <h3>Reminders</h3>

      <p>Logged in as: {session.user?.email}</p>

      <CreateReminderForm />

      {reminders && reminders.length > 0 && (
        <ul>
          {reminders.map((reminder) => (
            <Reminder key={reminder.id} reminder={reminder} />
          ))}
        </ul>
      )}
    </main>
  );
}
