import React, { type ReactNode } from 'react';

import * as RadixDialog from '@radix-ui/react-dialog';
import { tv, type VariantProps } from 'tailwind-variants';

import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';

const dialog = tv({
  slots: {
    overlay: 'fixed inset-0 animate-fadeIn bg-black/50',
    dialog:
      'fixed inset-0 left-1/2 top-1/2 flex max-h-min max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeIn flex-col rounded-lg bg-white p-8',
  },
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type DialogVariants = VariantProps<typeof dialog>;

interface DialogProps extends DialogVariants {
  children: ReactNode;
  title?: string;
  onClose?: () => void;
  isOpen: boolean;
  setOpen?: (value: boolean) => void;
}

export default function Dialog({
  isOpen,
  setOpen,
  children,
  title = '',
  onClose,
  ...props
}: DialogProps) {
  const styles = dialog(props);

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={setOpen}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay()} />

        <RadixDialog.Content className={styles.dialog()}>
          {(title || onClose) && (
            <div className="mb-4 flex items-start justify-between gap-2">
              {title && (
                <RadixDialog.Title className="text-4xl font-bold">{title}</RadixDialog.Title>
              )}

              {onClose && <IconButton src="/icons/xmark.svg" onClick={onClose} />}
            </div>
          )}

          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
