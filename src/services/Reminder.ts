import { prisma } from '@/src/database/prisma';

export async function createReminder(reminderListId: string, title: string, tag?: string) {
  try {
    const reminder = await prisma.reminder.create({
      data: {
        title,
        tag,
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

// eslint-disable-next-line max-params
export async function updateReminder(
  id: string,
  title: string,
  isCompleted: boolean,
  tag?: string,
) {
  try {
    const reminder = await prisma.reminder.update({
      where: {
        id,
      },
      data: { title, isCompleted, tag },
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
