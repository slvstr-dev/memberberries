'use client';

import * as Checkbox from '@radix-ui/react-checkbox';

import Tag from '@/components/ui/Tag';

interface ReminderDummyProps {
  reminder: {
    isCompleted: boolean;
    title: string;
    priority?: string;
    tag?: string;
  };
}

export default function ReminderDummy({ reminder }: ReminderDummyProps) {
  return (
    <li className="flex items-center gap-4 rounded-md bg-white p-4 transition-transform hover:scale-105">
      <Checkbox.Root
        className="grid h-5 w-5 place-items-center rounded-full border border-gray-300 bg-white transition-colors hover:border-emerald-500"
        defaultChecked={reminder.isCompleted}>
        <Checkbox.Indicator className="h-3 w-3 rounded-full bg-emerald-500" />
      </Checkbox.Root>

      <p className="grow text-sm">{reminder.title}</p>

      {reminder.tag && <Tag priority={reminder.priority} label={reminder.tag} />}
    </li>
  );
}
