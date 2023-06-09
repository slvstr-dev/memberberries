import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-md font-medium text-white',
  variants: {
    color: {
      primary: 'bg-blue-500 transition-colors hover:bg-blue-600 active:bg-blue-600',
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
    textSize: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    padding: {
      sm: 'px-1',
      md: 'px-2 py-1',
      lg: 'px-3 py-2',
    },
  },
  defaultVariants: {
    textSize: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: () => void;
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
      <Link className={button({ props, disabled })} href={{ pathname: href }}>
        {children}
      </Link>
    );
  }
  return (
    <button className={button(props)} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
