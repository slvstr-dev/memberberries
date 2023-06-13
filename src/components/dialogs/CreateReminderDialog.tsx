'use client';

import { useParams } from 'next/navigation';

import CreateReminderForm from '@/components/forms/CreateReminderForm';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import Tile from '@/components/ui/Tile';
import { useBoolean } from '@/src/hooks/useBoolean';

interface CreateReminderDialogProps {
  className?: string;
}

export default function CreateReminderDialog({ className }: CreateReminderDialogProps) {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const { id = '' } = useParams();

  return (
    <>
      <Tile className={className}>
        <IconButton
          padding="sm"
          src="/icons/circle-plus.svg"
          onClick={setOpen}
          label="Add reminder"
        />
      </Tile>

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Add reminder" onClose={setClosed}>
        <CreateReminderForm reminderListId={id} onSubmit={setClosed} />
      </Dialog>
    </>
  );
}
