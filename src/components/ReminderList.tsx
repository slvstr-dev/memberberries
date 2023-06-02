'use client';

import { useTransition, type FocusEvent, type KeyboardEvent } from 'react';

import type { ReminderList } from '@prisma/client';

import { deleteReminderListAction, updateReminderListAction } from '@/app/actions';
import Button from '@/components/Button';

interface ReminderListProps {
  reminderList: ReminderList;
}

export default function ReminderList({ reminderList }: ReminderListProps) {
  const [, startTransition] = useTransition();

  const handleUpdate = (value: string) => {
    startTransition(() => updateReminderListAction(reminderList.id, value));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value === reminderList.title) {
      return;
    }

    handleUpdate(event.target.value);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      handleUpdate(event.currentTarget.value);
    }
  };

  return (
    <li>
      <label htmlFor={`${reminderList.id}_title`}>Title: </label>

      <input
        id={`${reminderList.id}_title`}
        className="bg-black text-white focus:bg-black focus:text-white"
        type="text"
        defaultValue={reminderList.title}
        onBlur={handleBlur}
        onKeyDown={handleOnKeyDown}
      />

      <p>Created: {reminderList.createdAt.toISOString()}</p>

      <p>Updated: {reminderList.updatedAt.toISOString()}</p>

      <Button onClick={() => startTransition(() => deleteReminderListAction(reminderList.id))}>
        Delete reminder list
      </Button>

      <Button href={`/dashboard/reminders/${reminderList.id}`}>Go to reminder list</Button>
    </li>
  );
}
