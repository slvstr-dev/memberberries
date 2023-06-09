import Image from 'next/image';
import Link from 'next/link';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  slots: {
    button: 'flex gap-2 font-medium text-white',
    label: 'grow text-sm font-semibold capitalize text-gray-400',
    icon: '',
  },
  variants: {
    color: {
      primary: {
        icon: 'h-5 w-5 rounded-full  bg-blue-500 px-1 transition-colors hover:bg-blue-600 active:bg-blue-600',
      },
    },
    disabled: {
      true: 'pointer-events-none bg-gray-500 opacity-50',
    },
    padding: {
      sm: 'px-1',
      md: 'px-2 py-1',
      lg: 'px-3 py-2',
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  src: string;
  alt?: string;
  label?: string;
}

export default function Button({
  onClick,
  href,
  type = 'button',
  src,
  alt = '',
  disabled = false,
  label,
  ...props
}: ButtonProps) {
  const styles = button({ ...props, disabled });

  if (href) {
    return (
      <Link className={styles.button()} href={{ pathname: href }}>
        <Image className={styles.icon()} src={src} width={16} height={16} alt={alt} />

        {label && <p className={styles.label()}>{label}</p>}
      </Link>
    );
  }
  return (
    <button className={styles.button()} onClick={onClick} type={type} disabled={disabled}>
      <Image className={styles.icon()} src={src} width={16} height={16} alt={alt} />

      {label && <p className={styles.label()}>{label}</p>}
    </button>
  );
}
