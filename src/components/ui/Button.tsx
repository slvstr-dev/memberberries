import type { MouseEventHandler } from 'react';

import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-full bg-blue-500 font-medium text-white active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    disabled: false,
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={button({ ...props, disabled })} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={button({ ...props, disabled })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}
