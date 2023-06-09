'use client';

import IconButton from '@/components/ui/IconButton';

export default function ReminderListModal() {
  return (
    <IconButton
      src="/svg/circle-plus.svg"
      onClick={() => console.log('Create a new list')}
      label="Add list"
    />
  );
}
