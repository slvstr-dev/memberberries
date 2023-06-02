'use client';

import { useTransition, type FocusEvent, type KeyboardEvent } from 'react';

import type { Reminder } from '@prisma/client';

import { deleteReminderAction, updateReminderAction } from '@/app/actions';
import Button from '@/components/ui/Button';

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
    <li>
      <label htmlFor={`${reminder.id}_isCompleted`}>Completed: </label>

      <input
        id={`${reminder.id}_isCompleted`}
        type="checkbox"
        defaultChecked={reminder.isCompleted}
        onChange={(e) => handleUpdate(reminder.title, e.target.checked)}
      />

      <br />

      <label htmlFor={`${reminder.id}_title`}>Title: </label>

      <input
        id={`${reminder.id}_title`}
        className="bg-black text-white focus:bg-black focus:text-white"
        type="text"
        defaultValue={reminder.title}
        onBlur={handleBlur}
        onKeyDown={handleOnKeyDown}
      />

      <p>Created: {reminder.createdAt.toISOString()}</p>

      <p>Updated: {reminder.updatedAt.toISOString()}</p>

      <Button
        onClick={() => startTransition(() => deleteReminderAction(reminder.id))}
        disabled={isPending}>
        Delete reminder
      </Button>
    </li>
  );
}
