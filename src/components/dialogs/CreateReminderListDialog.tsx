'use client';

import { useRouter } from 'next/navigation';

import ReminderListForm from '@/components/forms/ReminderListForm';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import Tile from '@/components/ui/Tile';
import { useBoolean } from '@/hooks/useBoolean';

export default function CreateReminderListDialog() {
  const router = useRouter();
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);

  const handleSubmit = (id?: string) => {
    router.refresh();

    setClosed();

    router.push(id ? `/dashboard/list/${id}` : '/dashboard');
  };

  return (
    <>
      <Tile>
        <IconButton
          className="w-full"
          padding="sm"
          src="/svg/circle-plus.svg"
          onClick={setOpen}
          label="Add list"
        />
      </Tile>

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Add list" onClose={setClosed}>
        <ReminderListForm onSubmit={handleSubmit} />
      </Dialog>
    </>
  );
}
