'use client';

import { useTransition, type FocusEvent, type KeyboardEvent } from 'react';

import type { Reminder } from '@prisma/client';

import { deleteReminderAction, updateReminderAction } from '@/app/actions';
import { formatDate } from '@/src/utils/date';

import IconButton from './IconButton';

interface ReminderProps {
  reminder: Reminder;
}

export default function Reminder({ reminder }: ReminderProps) {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = (title: string, isCompleted: boolean) => {
    startTransition(() => updateReminderAction(reminder.id, title, isCompleted));
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
      <input
        id={`${reminder.id}_isCompleted`}
        type="checkbox"
        defaultChecked={reminder.isCompleted}
        onChange={(e) => handleUpdate(reminder.title, e.target.checked)}
      />

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

      <IconButton
        src="/svg/xmark.svg"
        onClick={() => startTransition(() => deleteReminderAction(reminder.id))}
        disabled={isPending}
      />
    </li>
  );
}
