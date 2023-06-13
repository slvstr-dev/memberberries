'use client';

import { useTransition } from 'react';

import type { Reminder } from '@prisma/client';

import { deleteReminderAction } from '@/app/actions';
import UpdateReminderForm from '@/components/forms/UpdateReminderForm';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import IconButton from '@/components/ui/IconButton';
import Tag from '@/components/ui/Tag';
import { useBoolean } from '@/src/hooks/useBoolean';
import { formatDate } from '@/src/utils/date';

interface UpdateReminderDialogProps {
  reminder: Reminder;
  className?: string;
}

export default function UpdateReminderDialog({
  className = '',
  reminder,
}: UpdateReminderDialogProps) {
  const { value: isOpen, setTrue: setOpen, setFalse: setClosed } = useBoolean(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => deleteReminderAction(reminder.id));
  };

  return (
    <>
      <IconButton
        className={className}
        padding="sm"
        src="/icons/circle-info.svg"
        onClick={setOpen}
      />

      <Dialog isOpen={isOpen} setOpen={setOpen} title="Update reminder" onClose={setClosed}>
        <div className="flex gap-2">
          <Tag
            className="text-xs text-gray-400"
            label={`Created: ${formatDate(reminder.createdAt)}`}
          />

          <Tag
            className="text-xs text-gray-400"
            label={`Created: ${formatDate(reminder.updatedAt)}`}
          />
        </div>

        <UpdateReminderForm className="mt-4" reminder={reminder} onSubmit={setClosed} />

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
