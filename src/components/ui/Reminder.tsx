'use client';

import { useTransition } from 'react';

import type { Reminder } from '@prisma/client';
import * as Checkbox from '@radix-ui/react-checkbox';

import { updateReminderAction } from '@/app/actions';
import UpdateReminderDialog from '@/components/dialogs/UpdateReminderDialog';
import Tag from '@/components/ui/Tag';

interface ReminderProps {
  reminder: Reminder;
}

export default function Reminder({ reminder }: ReminderProps) {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (title: string, isCompleted: boolean) => {
    startTransition(() => updateReminderAction(reminder.id, title, isCompleted));
  };

  const handleCheck = () => {
    handleUpdate(reminder.title, !reminder.isCompleted);
  };

  return (
    <li className="flex items-center gap-4 rounded-md bg-white p-4">
      <Checkbox.Root
        id={`${reminder.id}_isCompleted`}
        className="grid h-5 w-5 place-items-center rounded-full border border-gray-300 bg-white transition-colors hover:border-emerald-500"
        defaultChecked={reminder.isCompleted}
        onCheckedChange={handleCheck}
        disabled={isPending}>
        <Checkbox.Indicator className="h-3 w-3 rounded-full bg-emerald-500" />
      </Checkbox.Root>

      <p className="grow text-sm">{reminder.title}</p>

      {reminder.tag && <Tag priority={reminder.priority ?? ''} label={reminder.tag} />}

      <UpdateReminderDialog reminder={reminder} />
    </li>
  );
}
