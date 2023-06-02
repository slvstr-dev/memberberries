'use client';

import { useRef } from 'react';

import { useSession } from 'next-auth/react';

import { createReminderListAction } from '@/app/actions';
import Button from '@/components/ui/Button';

export default function ReminderListForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { data: session } = useSession();

  async function handleAction(formData: FormData) {
    await createReminderListAction(formData, session?.user.id ?? '');

    formRef.current?.reset();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={handleAction} ref={formRef}>
      <h2>Create a reminder list</h2>

      <input type="text" name="title" placeholder="Title" className="text-black" />

      <Button type="submit">Create reminder list</Button>
    </form>
  );
}
