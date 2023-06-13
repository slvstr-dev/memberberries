import type { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const iconButton = tv({
  slots: {
    button: 'flex items-center gap-2 text-sm font-normal capitalize text-gray-400',
    icon: 'transition-opacity hover:opacity-50',
  },
  variants: {
    color: {
      primary: {
        icon: 'h-4 w-4 rounded-full bg-blue-500 px-1',
      },
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
    padding: {
      sm: {
        button: 'p-1',
      },
      md: {
        button: 'p-2',
      },
      lg: {
        button: 'p-3',
      },
    },
  },
});

type IconButtonVariants = VariantProps<typeof iconButton>;

export interface IconButtonProps extends IconButtonVariants {
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  src: string;
  alt?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
}

export default function IconButton({
  onClick,
  href,
  type = 'button',
  src,
  alt = '',
  disabled = false,
  label,
  className,
  children,
  ...props
}: IconButtonProps) {
  const styles = iconButton({ ...props, disabled });

  if (href) {
    return (
      <Link className={styles.button({ class: className })} href={{ pathname: href }}>
        <Image className={styles.icon()} src={src} width={16} height={16} alt={alt} />

        {label}

        {children}
      </Link>
    );
  }
  return (
    <button
      className={styles.button({ class: className })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      <Image className={styles.icon()} src={src} width={16} height={16} alt={alt} />

      {label}

      {children}
    </button>
  );
}
