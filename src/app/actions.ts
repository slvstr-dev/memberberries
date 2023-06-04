'use server';

import { revalidatePath } from 'next/cache';

import { createReminder, deleteReminder, updateReminder } from '@/services/Reminder';
import {
  createReminderList,
  deleteReminderList,
  updateReminderList,
} from '@/services/ReminderList';

export async function createReminderAction(formData: FormData, reminderListId: string) {
  const title = formData.get('title') as string;

  await createReminder(title, reminderListId);

  revalidatePath('/dashboard');
}

export async function createReminderListAction(formData: FormData, userId: string) {
  const title = formData.get('title') as string;

  await createReminderList(title, userId);

  revalidatePath('/dashboard');
}

export async function updateReminderAction(id: string, title: string, isCompleted: boolean) {
  await updateReminder(id, title, isCompleted);

  revalidatePath('/dashboard');
}

export async function updateReminderListAction(id: string, title: string) {
  await updateReminderList(id, title);

  revalidatePath('/dashboard');
}

export async function deleteReminderAction(id: string) {
  await deleteReminder(id);

  revalidatePath('/dashboard');
}

export async function deleteReminderListAction(id: string) {
  await deleteReminderList(id);

  revalidatePath('/dashboard');
}
