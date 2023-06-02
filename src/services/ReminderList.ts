import { prisma } from '@/src/database/prisma';

export async function createReminderList(title: string, userId: string) {
  try {
    const reminderList = await prisma.reminderList.create({
      data: {
        title,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return { reminderList };
  } catch (error) {
    return { error };
  }
}

export async function getReminderList(reminderListId: string) {
  try {
    const reminderList = await prisma.reminderList.findUnique({
      where: {
        id: reminderListId,
      },
      include: {
        reminders: true,
      },
    });

    return { reminderList };
  } catch (error) {
    return { error };
  }
}

export async function updateReminderList(id: string, title: string) {
  try {
    const reminderList = await prisma.reminderList.update({
      where: {
        id,
      },
      data: { title },
    });

    return { reminderList };
  } catch (error) {
    return { error };
  }
}

export async function deleteReminderList(id: string) {
  try {
    const reminderList = await prisma.reminderList.delete({
      where: {
        id,
      },
    });

    return { reminderList };
  } catch (error) {
    return { error };
  }
}
