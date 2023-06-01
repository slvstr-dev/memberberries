'use server';

import { revalidatePath } from 'next/cache';

import { createReminder, deleteReminder, updateReminder } from '@/services/Reminder';

export async function createReminderAction(formData: FormData) {
  const title = formData.get('title') as string;

  if (typeof title === 'string') {
    await createReminder(title);
  }

  revalidatePath('/');
}

export async function updateReminderAction(id: string, isCompleted: boolean) {
  await updateReminder(id, isCompleted);

  revalidatePath('/');
}

export async function deleteReminderAction(id: string) {
  await deleteReminder(id);

  revalidatePath('/');
}
