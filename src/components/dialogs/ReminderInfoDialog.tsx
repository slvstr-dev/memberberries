'use client';

import { useTransition } from 'react';

import type { Reminder } from '@prisma/client';

import { deleteReminderAction } from '@/app/actions';
import UpdateReminderForm from '@/components/forms/UpdateReminderForm';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import { useBoolean } from '@/src/hooks/useBoolean';
import { formatDate } from '@/src/utils/date';

interface ReminderInfoDialogProps {
  reminder: Reminder;
  className?: string;
}

export default function ReminderInfoDialog({ className = '', reminder }: ReminderInfoDialogProps) {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => deleteReminderAction(reminder.id));
  };

  return (
    <>
      <IconButton className={className} padding="sm" src="/svg/circle-info.svg" onClick={setOpen} />

      <Dialog
        isOpen={isOpen}
        setOpen={setOpen}
        title="Update reminder"
        onClose={setClosed}
        hasCloseButton={false}>
        <p className="text-xs text-gray-400">Created: {formatDate(reminder.createdAt)}</p>

        <p className="text-xs text-gray-400">Updated: {formatDate(reminder.updatedAt)}</p>

        <UpdateReminderForm reminder={reminder} onSubmit={setClosed} />

        <Button
          className="mt-2"
          color="primary"
          padding="lg"
          onClick={handleDelete}
          disabled={isPending}>
          Delete reminder
        </Button>
      </Dialog>
    </>
  );
}
