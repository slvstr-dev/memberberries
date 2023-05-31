import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-full bg-blue-500 font-medium text-white active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
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
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button className={button(props)} onClick={onClick}>
      {children}
    </button>
  );
}
