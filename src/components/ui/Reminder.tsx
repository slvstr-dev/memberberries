'use client';

import { useTransition, type FocusEvent, type KeyboardEvent } from 'react';

import type { Reminder } from '@prisma/client';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { deleteReminderAction, updateReminderAction } from '@/app/actions';
import { formatDate } from '@/utils/date';

import IconButton from './IconButton';

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

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value === reminder.title) {
      return;
    }

    handleUpdate(event.target.value, reminder.isCompleted);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      handleUpdate(event.currentTarget.value, reminder.isCompleted);
    }
  };

  return (
    <li className="flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-gray-50">
      <Checkbox.Root
        id={`${reminder.id}_isCompleted`}
        className={`flex h-6 w-6 items-center justify-center rounded-full border bg-white transition-colors focus:ring-inset ${
          reminder.isCompleted ? 'border-blue-500' : 'border-gray-300'
        }`}
        defaultChecked={reminder.isCompleted}
        onCheckedChange={handleCheck}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <div className="grow">
        <input
          id={`${reminder.id}_title`}
          className="text-sm focus:bg-black focus:text-white"
          type="text"
          defaultValue={reminder.title}
          onBlur={handleBlur}
          onKeyDown={handleOnKeyDown}
        />

        <p className="text-xs text-gray-400">Created: {formatDate(reminder.createdAt)}</p>

        <p className="text-xs text-gray-400">Updated: {formatDate(reminder.updatedAt)}</p>
      </div>

      {/* <IconButton src="/svg/circle-info.svg" onClick={() => console.log('Open modal')} /> */}

      <IconButton
        src="/svg/xmark.svg"
        onClick={() => startTransition(() => deleteReminderAction(reminder.id))}
        disabled={isPending}
      />
    </li>
  );
}
