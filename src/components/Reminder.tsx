'use client';

import { useTransition } from 'react';

import type { Reminder } from '@prisma/client';

import { deleteReminderAction, updateReminderAction } from '@/app/actions';
import Button from '@/components/Button';

interface ReminderProps {
  reminder: Reminder;
}

export default function Reminder({ reminder }: ReminderProps) {
  const [, startTransition] = useTransition();

  return (
    <li>
      <input
        id={reminder.id}
        type="checkbox"
        defaultChecked={reminder.isCompleted}
        onChange={(e) => startTransition(() => updateReminderAction(reminder.id, e.target.checked))}
      />

      <p>Title: {reminder.title}</p>

      <p>Completed: {reminder.isCompleted.toString()}</p>

      <p>Created: {reminder.createdAt.toISOString()}</p>

      <p>Updated: {reminder.updatedAt.toISOString()}</p>

      <Button onClick={() => startTransition(() => deleteReminderAction(reminder.id))}>
        Delete reminder
      </Button>
    </li>
  );
}
