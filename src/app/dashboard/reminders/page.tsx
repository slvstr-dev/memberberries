import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import ReminderListForm from '@/components/forms/ReminderListForm';
import Button from '@/components/ui/Button';
import ReminderList from '@/components/ui/ReminderList';
import { authOptions } from '@/database/options';
import { getUserReminderLists } from '@/services/User';

export default async function Reminders() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?redirect=/dashboard/reminders');
  }

  const { reminderLists } = await getUserReminderLists(session.user.id ?? '');

  return (
    <main>
      <h3>Reminders</h3>

      <p>Logged in as: {session.user.email}</p>

      <ReminderListForm />

      {reminderLists && reminderLists.length > 0 ? (
        <ul>
          {reminderLists.map((reminderList) => (
            <ReminderList key={reminderList.id} reminderList={reminderList} />
          ))}
        </ul>
      ) : (
        <p>No reminder lists</p>
      )}

      <Button href="/dashboard">Go to dashboard</Button>
    </main>
  );
}
