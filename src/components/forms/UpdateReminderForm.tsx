'use client';

import { useRef, useTransition } from 'react';

import type { Reminder } from '@prisma/client';

import { updateReminderAction } from '@/app/actions';
import Button from '@/components/ui/Button';

interface UpdateReminderFormProps {
  reminder: Reminder;
  onSubmit?: () => void;
}

export default function UpdateReminderForm({ reminder, onSubmit }: UpdateReminderFormProps) {
  const [isPending] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const title = formData.get('title') as string;
    const isCompleted = !!formData.get('isCompleted');

    await updateReminderAction(reminder.id, title, isCompleted);

    formRef.current?.reset();

    onSubmit?.();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={handleAction} ref={formRef} className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-bold">
          Title*
        </label>

        <input
          type="text"
          name="title"
          placeholder="What's the title of your reminder?"
          className="rounded-md border border-gray-300 p-2"
          defaultValue={reminder.title}
          required
        />
      </fieldset>

      <Button type="submit" color="primary" padding="lg" disabled={isPending}>
        Update reminder
      </Button>
    </form>
  );
}
