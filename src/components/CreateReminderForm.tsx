'use client';

import { useRef } from 'react';

import { createReminderAction } from '@/app/actions';

export default function CreateReminderForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    await createReminderAction(formData);

    formRef.current?.reset();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={handleAction} ref={formRef}>
      <h2>Create a reminder</h2>

      <input type="text" name="title" placeholder="Title" />

      <button type="submit">Create reminder</button>
    </form>
  );
}
