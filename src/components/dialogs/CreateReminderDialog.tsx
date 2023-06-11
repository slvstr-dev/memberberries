'use client';

import { useParams } from 'next/navigation';

import ReminderForm from '@/components/forms/ReminderForm';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import { useBoolean } from '@/src/hooks/useBoolean';

export default function CreateReminderDialog() {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const { id = '' } = useParams();

  return (
    <>
      <IconButton padding="sm" src="/svg/circle-plus.svg" onClick={setOpen} />

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Add reminder" onClose={setClosed}>
        <ReminderForm reminderListId={id} onSubmit={setClosed} />
      </Dialog>
    </>
  );
}
