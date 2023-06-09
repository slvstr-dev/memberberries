import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth/next';

import Avatar from '@/components/ui/AvatarButton';
import IconButton from '@/components/ui/IconButton';
import LogoButton from '@/components/ui/LogoButton';
import Tile from '@/components/ui/Tile';
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

      <Tile color="primary">
        <Avatar />
      </Tile>

      <div className="grow">
        <h2 className="px-2 pb-1 text-xs font-semibold text-gray-400">My Lists</h2>

        {reminderLists && reminderLists.length > 0 && (
          <ul className="flex flex-col gap-1">
            {reminderLists.map((reminderList) => (
              <li key={reminderList.id}>
                <Tile hasHover>
                  <IconButton
                    color="primary"
                    padding="md"
                    src="/svg/list.svg"
                    href={`/dashboard/${reminderList.id}`}
                    label={reminderList.title}
                  />
                </Tile>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="flex flex-col">
        <li>
          <Tile>
            <ReminderListModal />
          </Tile>
        </li>
      </ul>
    </aside>
  );
}
