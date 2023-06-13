import { getServerSession } from 'next-auth/next';

import AvatarButton from '@/components/ui/AvatarButton';
import IconButton from '@/components/ui/IconButton';
import LogoButton from '@/components/ui/LogoButton';
import Tile from '@/components/ui/Tile';
import { authOptions } from '@/database/options';
import { getUserReminderLists } from '@/services/User';

import CreateReminderListDialog from '../dialogs/CreateReminderListDialog';

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  const { reminderLists } = await getUserReminderLists(session?.user.id ?? '');

  return (
    <aside className="flex max-h-screen w-48 -translate-x-full flex-col gap-4 p-4 transition-transform duration-150 ease-in md:translate-x-0">
      <LogoButton />

      <Tile color="primary">
        <AvatarButton />
      </Tile>

      <div className="grow overflow-y-auto">
        <h2 className="mb-1 px-2 text-xs font-semibold text-gray-400">My Lists</h2>

        {reminderLists && reminderLists.length > 0 ? (
          <ul className="flex flex-col gap-1 ">
            {reminderLists.map((reminderList) => (
              <li key={reminderList.id}>
                <Tile hasHover>
                  <IconButton
                    className="truncate"
                    color="primary"
                    padding="md"
                    src="/svg/list.svg"
                    href={`/dashboard/list/${reminderList.id}`}
                    label={reminderList.title}>
                    <div className="flex grow justify-between gap-1 overflow-hidden">
                      <span className="truncate">{reminderList.title}</span>

                      <span>{reminderList.reminderCount}</span>
                    </div>
                  </IconButton>
                </Tile>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2 text-xs font-light text-gray-400">You have no lists.</p>
        )}
      </div>

      <CreateReminderListDialog />
    </aside>
  );
}
