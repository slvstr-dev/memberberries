'use client';

import type { MouseEventHandler } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const iconButton = tv({
  base: 'h-6 w-6 rounded-full bg-gray-800 px-1.5 transition-opacity hover:opacity-50',
  variants: {
    color: {
      primary: 'bg-blue-500 ',
      secondary: 'bg-purple-500 ',
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

type IconButtonVariants = VariantProps<typeof iconButton>;

interface IconButtonProps extends IconButtonVariants {
  src: string;
  alt?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function IconButton({
  href,
  onClick,
  disabled,
  type = 'button',
  src,
  alt = '',
  ...props
}: IconButtonProps) {
  if (href) {
    return (
      <Link className={iconButton({ ...props, disabled })} href={{ pathname: href }}>
        <Image src={src} width={32} height={32} alt={alt} />
      </Link>
    );
  }

  return (
    <button
      className={iconButton({ ...props, disabled })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      <Image src={src} width={32} height={32} alt={alt} />
    </button>
  );
}
