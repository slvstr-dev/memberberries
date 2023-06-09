import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  variants: {
    color: {
      primary:
        'rounded-md bg-blue-500 text-white transition-colors hover:bg-blue-600 active:bg-blue-600',
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
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={button({ props, class: className, disabled })} href={{ pathname: href }}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={button({ props, class: className, disabled })}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}
