import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import LogoButton from '@/components/ui/LogoButton';
import ReminderList from '@/components/ui/ReminderList';
import { authOptions } from '@/database/options';
import { getUserReminderLists } from '@/services/User';

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?redirect=/dashboard/reminders');
  }

  const { reminderLists } = await getUserReminderLists(session.user.id ?? '');

  return (
    <aside className="flex w-48 -translate-x-full flex-col gap-4 p-4 transition-transform duration-150 ease-in md:translate-x-0">
      <LogoButton />

      <div className="grow">
        <h3 className="text-xs font-semibold text-gray-400">My Lists</h3>

        {reminderLists && reminderLists.length > 0 && (
          <ul className="mt-2 flex flex-col gap-2">
            {reminderLists.map((reminderList) => (
              <li key={reminderList.id}>
                <ReminderList reminderList={reminderList} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <h3 className="text-xs font-semibold text-gray-400">Add list</h3>

      {/* <ReminderListForm /> */}
    </aside>
  );
}
