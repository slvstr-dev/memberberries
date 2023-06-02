'use client';

import { useTransition } from 'react';

import type { ReminderList } from '@prisma/client';

import { deleteReminderListAction } from '@/app/actions';
import Button from '@/components/Button';

interface ReminderListProps {
  reminderList: ReminderList;
}

export default function ReminderList({ reminderList }: ReminderListProps) {
  const [, startTransition] = useTransition();

  return (
    <li>
      <p>Title: {reminderList.title}</p>

      <p>Created: {reminderList.createdAt.toISOString()}</p>

      <p>Updated: {reminderList.updatedAt.toISOString()}</p>

      <Button onClick={() => startTransition(() => deleteReminderListAction(reminderList.id))}>
        Delete reminder list
      </Button>

      <Button href={`/dashboard/reminders/${reminderList.id}`}>Go to reminder list</Button>
    </li>
  );
}
