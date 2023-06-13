'use server';

import { revalidatePath } from 'next/cache';

import { createReminder, deleteReminder, updateReminder } from '@/services/Reminder';
import {
  createReminderList,
  deleteReminderList,
  updateReminderList,
} from '@/services/ReminderList';

export async function createReminderAction(reminderListId: string, title: string, tag?: string) {
  await createReminder(reminderListId, title, tag);

  revalidatePath('/dashboard/list/[id]');
}

export async function createReminderListAction(userId: string, title: string) {
  const { reminderList } = await createReminderList(title, userId);

  revalidatePath('/dashboard');

  return reminderList;
}

// eslint-disable-next-line max-params
export async function updateReminderAction(
  id: string,
  title: string,
  isCompleted: boolean,
  tag?: string,
) {
  await updateReminder(id, title, isCompleted, tag);

  revalidatePath('/dashboard/list/[id]');
}

export async function updateReminderListAction(id: string, title: string) {
  await updateReminderList(id, title);

  revalidatePath('/dashboard');
}

export async function deleteReminderAction(id: string) {
  await deleteReminder(id);

  revalidatePath('/dashboard/list/[id]');
}

export async function deleteReminderListAction(id: string) {
  await deleteReminderList(id);

  revalidatePath('/dashboard');
}
