'use server';

import { revalidatePath } from 'next/cache';

import { createReminder, deleteReminder, updateReminder } from '@/services/Reminder';
import {
  createReminderList,
  deleteReminderList,
  updateReminderList,
} from '@/services/ReminderList';

export async function createReminderListAction(formData: FormData, userId: string) {
  const title = formData.get('title') as string;

  if (typeof title === 'string') {
    await createReminderList(title, userId);
  }

  revalidatePath('/');
}

export async function createReminderAction(formData: FormData, reminderListId: string) {
  const title = formData.get('title') as string;

  if (typeof title === 'string') {
    await createReminder(title, reminderListId);
  }

  revalidatePath('/');
}

export async function updateReminderAction(id: string, isCompleted: boolean) {
  await updateReminder(id, isCompleted);

  revalidatePath('/');
}

export async function updateReminderListAction(id: string, title: string) {
  await updateReminderList(id, title);

  revalidatePath('/');
}

export async function deleteReminderAction(id: string) {
  await deleteReminder(id);

  revalidatePath('/');
}

export async function deleteReminderListAction(id: string) {
  await deleteReminderList(id);

  revalidatePath('/');
}
