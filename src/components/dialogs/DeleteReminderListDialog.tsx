'use client';

import { useTransition } from 'react';

import { useParams } from 'next/navigation';

import { deleteReminderListAction } from '@/app/actions';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import Tile from '@/components/ui/Tile';
import { useBoolean } from '@/hooks/useBoolean';

interface DeleteReminderListDialogProps {
  className?: string;
}

export default function DeleteReminderListDialog({ className }: DeleteReminderListDialogProps) {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const { id = '' } = useParams();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => deleteReminderListAction(id));
  };

  return (
    <>
      <Tile className={className}>
        <Button
          className="text-sm font-normal capitalize text-gray-400 hover:text-red-500"
          padding="sm"
          onClick={setOpen}>
          Delete list
        </Button>
      </Tile>

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Delete list" onClose={setClosed}>
        <p className="mb-4">
          Are you sure you want to delete this list? This action cannot be undone.
        </p>

        <Button
          className="mt-2"
          color="urgent"
          padding="lg"
          onClick={handleDelete}
          disabled={isPending}>
          Delete
        </Button>
      </Dialog>
    </>
  );
}
