import { Fragment } from 'react';

import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import ReminderModal from '@/components/modals/ReminderModal';
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
      <ReminderModal className="ml-auto" />

      <div className="my-2 flex justify-between text-4xl text-blue-500">
        <h1 className="font-bold">{reminderList?.title}</h1>

        <p>{reminderList?._count.reminders}</p>
      </div>

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
