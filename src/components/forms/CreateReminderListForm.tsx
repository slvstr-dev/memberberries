'use client';

import { useRef } from 'react';

import { useSession } from 'next-auth/react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { createReminderListAction } from '@/app/actions';
import Button from '@/components/ui/Button';

interface CreateReminderListFormProps {
  onSubmit?: (id?: string) => void;
}

export default function CreateReminderListForm({ onSubmit }: CreateReminderListFormProps) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  async function handleAction(formData: FormData) {
    const data = await createReminderListAction(formData, session?.user.id ?? '');

    formRef.current?.reset();

    onSubmit?.(data?.id);
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
          placeholder="What's the title of your list?"
          className="rounded-md border border-gray-300 p-2"
          required
        />
      </fieldset>

      <Button type="submit" color="primary" padding="lg" disabled={pending}>
        Create list
      </Button>
    </form>
  );
}
