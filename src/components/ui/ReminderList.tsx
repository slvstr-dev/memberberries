import type { ReactNode } from 'react';

import type { ReminderList } from '@prisma/client';

interface ReminderListProps {
  children: ReactNode;
  className?: string;
}

export default function ReminderList({ children, className = '' }: ReminderListProps) {
  return <ul className={`relative flex flex-col gap-4 ${className}`}>{children}</ul>;
}
