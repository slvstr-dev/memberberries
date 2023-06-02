import { prisma } from '@/src/database/prisma';

export async function createReminder(title: string, reminderListId: string) {
  try {
    const reminder = await prisma.reminder.create({
      data: {
        title,
        reminderList: {
          connect: {
            id: reminderListId,
          },
        },
      },
    });

    return { reminder };
  } catch (error) {
    return { error };
  }
}

export async function updateReminder(id: string, title: string, isCompleted: boolean) {
  try {
    const reminder = await prisma.reminder.update({
      where: {
        id,
      },
      data: { title, isCompleted },
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
