import { prisma } from '@/src/database/prisma';

export async function getReminders() {
  try {
    const reminders = await prisma.reminder.findMany();

    return { reminders };
  } catch (error) {
    return { error };
  }
}

export async function createReminder(title: string) {
  try {
    const reminder = await prisma.reminder.create({
      data: {
        title,
      },
    });

    return { reminder };
  } catch (error) {
    return { error };
  }
}

export async function updateReminder(id: string, isCompleted: boolean) {
  try {
    const reminder = await prisma.reminder.update({
      where: {
        id,
      },
      data: { isCompleted },
    });

    return { reminder };
  } catch (error) {
    return { error };
  }
}

export async function deleteReminder(id: string) {
  try {
    const reminder = await prisma.reminder.delete({
      where: {
        id,
      },
    });

    return { reminder };
  } catch (error) {
    return { error };
  }
}
