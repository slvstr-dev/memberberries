'use client';

import { useRef } from 'react';

import { createReminderAction } from '@/app/actions';
import Button from '@/components/ui/Button';

interface ReminderFormProps {
  reminderListId: string;
}

export default function ReminderForm({ reminderListId }: ReminderFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    await createReminderAction(formData, reminderListId);

    formRef.current?.reset();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={handleAction} ref={formRef}>
      <h2>Create a reminder</h2>

      <input type="text" name="title" placeholder="Title" className="text-black" />

      <Button type="submit">Create reminder</Button>
    </form>
  );
}
