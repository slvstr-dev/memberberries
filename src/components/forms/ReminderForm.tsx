'use client';

import { useRef } from 'react';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { createReminderAction } from '@/app/actions';
import Button from '@/components/ui/Button';

interface ReminderFormProps {
  reminderListId: string;
  onSubmit?: () => void;
}

export default function ReminderForm({ reminderListId, onSubmit }: ReminderFormProps) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    await createReminderAction(formData, reminderListId);

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
          required
        />
      </fieldset>

      <Button type="submit" color="primary" padding="lg" disabled={pending}>
        Create reminder
      </Button>
    </form>
  );
}
