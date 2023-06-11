'use client';

import { useTransition } from 'react';

import { useParams } from 'next/navigation';

import { deleteReminderListAction } from '@/app/actions';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import Tile from '@/components/ui/Tile';
import { useBoolean } from '@/hooks/useBoolean';

export default function DeleteReminderListDialog() {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const { id = '' } = useParams();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => deleteReminderListAction(id));
  };

  return (
    <>
      <Tile>
        <Button
          className="text-sm font-normal capitalize text-gray-400"
          padding="sm"
          onClick={setOpen}>
          Delete list
        </Button>
      </Tile>

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Delete list" onClose={setClosed}>
        <Button
          className="mt-2"
          color="primary"
          padding="lg"
          onClick={handleDelete}
          disabled={isPending}>
          Delete
        </Button>
      </Dialog>
    </>
  );
}
