'use client';

import { useTransition } from 'react';

import type { Reminder } from '@prisma/client';
import * as Checkbox from '@radix-ui/react-checkbox';

import { updateReminderAction } from '@/app/actions';
import ReminderInfoDialog from '@/components/dialogs/ReminderInfoDialog';

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
    <li className="flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-gray-50">
      <Checkbox.Root
        id={`${reminder.id}_isCompleted`}
        className="grid h-6 w-6 place-items-center rounded-full border border-gray-300 bg-white transition-colors hover:border-blue-500"
        defaultChecked={reminder.isCompleted}
        onCheckedChange={handleCheck}
        disabled={isPending}>
        <Checkbox.Indicator className="h-4 w-4 rounded-full bg-blue-500" />
      </Checkbox.Root>

      <p className="grow text-sm">{reminder.title}</p>

      <ReminderInfoDialog reminder={reminder} />
    </li>
  );
}
