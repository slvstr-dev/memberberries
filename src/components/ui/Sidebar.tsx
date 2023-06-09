import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import AvatarButton from '@/components/ui/AvatarButton';
import IconButton from '@/components/ui/IconButton';
import IconListItem from '@/components/ui/IconListItem';
import LogoButton from '@/components/ui/LogoButton';
import { authOptions } from '@/database/options';
import { getUserReminderLists } from '@/services/User';

import ReminderListModal from '../modals/ReminderListModal';

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?redirect=/dashboard/reminders');
  }

  const { reminderLists } = await getUserReminderLists(session.user.id ?? '');

  return (
    <aside className="flex w-48 -translate-x-full flex-col gap-4 p-4 transition-transform duration-150 ease-in md:translate-x-0">
      <LogoButton />

      <div className="flex flex-col items-center gap-2">
        <AvatarButton />

        <p>{session.user.name}</p>
      </div>

      <div className="grow">
        <h2 className="p-2 text-xs font-semibold text-gray-400">My Lists</h2>

        {reminderLists && reminderLists.length > 0 && (
          <ul className="mt-2 flex h-full flex-col gap-1">
            {reminderLists.map((reminderList) => (
              <IconListItem key={reminderList.id}>
                <IconButton
                  color="primary"
                  padding="md"
                  src="/svg/list.svg"
                  href={`/dashboard/${reminderList.id}`}
                  label={reminderList.title}
                />
              </IconListItem>
            ))}

            <IconListItem className="grow">
              <ReminderListModal />
            </IconListItem>
          </ul>
        )}
      </div>

      {/* <ReminderListForm /> */}
    </aside>
  );
}
