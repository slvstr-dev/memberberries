import type { ReactNode } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const tile = tv({
  base: 'rounded-md transition-colors',
  variants: {
    color: {
      transparent: 'bg-transparent hover:bg-gray-200 active:bg-gray-200',
      primary: 'bg-gray-200 hover:bg-gray-300 active:bg-blue-500 active:text-white',
    },
  },
  defaultVariants: {
    color: 'transparent',
  },
});

type TileVariants = VariantProps<typeof tile>;

interface TileProps extends TileVariants {
  className?: string;
  children: ReactNode;
}

export default function Tile({ children, className = '', ...props }: TileProps) {
  return <div className={tile({ ...props, className })}>{children}</div>;
}
