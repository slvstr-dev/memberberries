import Link from 'next/link';

import type { ReminderList } from '@prisma/client';

import IconButton from '@/components/ui/IconButton';

interface ReminderListProps {
  reminderList: ReminderList;
}

export default function ReminderList({ reminderList }: ReminderListProps) {
  return (
    <Link
      className="flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-gray-100"
      href={`/dashboard/${reminderList.id}`}>
      <IconButton src="/svg/list.svg" />

      <div className="grow">
        <p className="text-sm font-semibold capitalize text-gray-400">{reminderList.title}</p>
      </div>
    </Link>
  );
}
