import { Fragment } from 'react';

import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import Reminder from '@/components/ui/Reminder';
import ReminderList from '@/components/ui/ReminderList';
import { authOptions } from '@/database/options';
import { getReminderList } from '@/services/ReminderList';

interface ReminderProps {
  params: {
    id: string;
  };
}

export default async function ReminderListPage({ params: { id } }: ReminderProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/signin?redirect=/dashboard/reminders${id}`);
  }

  const { reminderList } = await getReminderList(id);

  return (
    <main>
      <h1 className="mb-2 text-4xl font-bold text-blue-500">{reminderList?.title}</h1>

      {reminderList && reminderList.reminders.length > 0 ? (
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
