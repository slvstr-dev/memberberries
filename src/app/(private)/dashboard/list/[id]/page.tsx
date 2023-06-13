import { Fragment } from 'react';

import { redirect } from 'next/navigation';

import CreateReminderDialog from '@/components/dialogs/CreateReminderDialog';
import DeleteReminderListDialog from '@/components/dialogs/DeleteReminderListDialog';
import Reminder from '@/components/ui/Reminder';
import ReminderList from '@/components/ui/ReminderList';
import { getReminderList } from '@/services/ReminderList';

interface ReminderProps {
  params: {
    id: string;
  };
}

export default async function ReminderListPage({ params: { id } }: ReminderProps) {
  const { reminderList } = await getReminderList(id);

  if (!reminderList) {
    redirect('/dashboard');
  }

  return (
    <main>
      <div className="flex grow justify-between">
        <div className="flex items-end gap-4">
          <h1 className="text-4xl font-bold text-emerald-500">{reminderList.title}</h1>

          <DeleteReminderListDialog />
        </div>

        <p className="text-4xl text-emerald-500">{reminderList._count.reminders}</p>
      </div>

      {reminderList.reminders.length > 0 && (
        <ReminderList className="mt-4">
          {reminderList.reminders.map((reminder) => {
            return <Reminder key={reminder.id} reminder={reminder} />;
          })}
        </ReminderList>
      )}

      <CreateReminderDialog className="mt-4 inline-block" />
    </main>
  );
}
