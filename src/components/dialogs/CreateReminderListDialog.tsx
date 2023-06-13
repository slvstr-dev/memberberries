'use client';

import { useRouter } from 'next/navigation';

import CreateReminderListForm from '@/components/forms/CreateReminderListForm';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import Tile from '@/components/ui/Tile';
import { useBoolean } from '@/hooks/useBoolean';

interface CreateReminderListDialogProps {
  className?: string;
}

export default function CreateReminderListDialog({ className }: CreateReminderListDialogProps) {
  const router = useRouter();
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);

  const handleSubmit = (id?: string) => {
    router.refresh();

    setClosed();

    router.push(id ? `/dashboard/list/${id}` : '/dashboard');
  };

  return (
    <>
      <Tile className={className}>
        <IconButton
          className="w-full"
          padding="sm"
          src="/icons/circle-plus.svg"
          onClick={setOpen}
          label="Add list"
        />
      </Tile>

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Add list" onClose={setClosed}>
        <CreateReminderListForm onSubmit={handleSubmit} />
      </Dialog>
    </>
  );
}
