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
      <CreateReminderDialog className="mb-2 ml-auto" />

      <div className="mb-4 flex grow justify-between">
        <div className="flex items-end gap-4">
          <h1 className="text-4xl font-bold text-blue-500">{reminderList.title}</h1>

          <DeleteReminderListDialog />
        </div>

        <p className="text-4xl text-blue-500">{reminderList._count.reminders}</p>
      </div>

      {reminderList.reminders.length > 0 ? (
        <ReminderList>
          {reminderList.reminders.map((reminder) => {
            const isLast =
              reminderList.reminders.indexOf(reminder) === reminderList.reminders.length - 1;

            return (
              <Fragment key={reminder.id}>
                <Reminder reminder={reminder} />

                {!isLast && <hr className="border-gray-100" />}
              </Fragment>
            );
          })}
        </ReminderList>
      ) : (
        <>
          <p className="mb-1 text-sm">No reminders</p>

          <hr className="border-gray-100" />
        </>
      )}
    </main>
  );
}
