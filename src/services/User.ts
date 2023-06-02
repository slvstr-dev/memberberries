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
      select: {
        reminderLists: true,
      },
    });

    return { reminderLists: user?.reminderLists };
  } catch (error) {
    return { error };
  }
}
