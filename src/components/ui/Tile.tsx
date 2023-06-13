import type { ReactNode } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const tile = tv({
  base: 'rounded-md px-1 transition-colors',
  variants: {
    color: {
      transparent: 'bg-transparent hover:bg-gray-200',
      primary: 'bg-gray-100 hover:bg-gray-200',
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
