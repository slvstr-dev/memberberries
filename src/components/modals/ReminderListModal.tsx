'use client';

import IconButton from '@/components/ui/IconButton';

export default function ReminderListModal() {
  return (
    <IconButton
      className="w-full"
      padding="sm"
      src="/svg/circle-plus.svg"
      onClick={() => console.log('Create a new list')}>
      Add list
    </IconButton>
  );
}
