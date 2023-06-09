'use client';

import IconButton from '@/components/ui/IconButton';

interface ReminderModalProps {
  className?: string;
}

export default function ReminderModal({ className }: ReminderModalProps) {
  return (
    <IconButton
      className={className}
      padding="sm"
      src="/svg/plus.svg"
      onClick={() => console.log('Create a new reminder')}
    />
  );
}
