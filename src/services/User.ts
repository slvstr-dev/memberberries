import { prisma } from '@/src/database/prisma';

export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getUserReminderLists(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        reminderLists: {
          include: {
            reminders: true,
          },
        },
      },
    });

    const reminderLists = user?.reminderLists.map((list) => ({
      ...list,
      reminderCount: list.reminders.length,
    }));

    return { reminderLists };
  } catch (error) {
    return { error };
  }
}
