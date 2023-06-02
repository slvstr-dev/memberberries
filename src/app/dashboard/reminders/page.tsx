import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import Button from '@/components/Button';
import CreateReminderListForm from '@/components/CreateReminderListForm';
import ReminderList from '@/components/ReminderList';
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

      <CreateReminderListForm />

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
