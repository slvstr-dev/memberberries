import type { ReactNode } from 'react';

import type { ReminderList } from '@prisma/client';

interface ReminderListProps {
  children: ReactNode;
}

export default function ReminderList({ children }: ReminderListProps) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}
