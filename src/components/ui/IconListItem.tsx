import type { ReactNode } from 'react';

interface IconListItemProps {
  className?: string;
  children: ReactNode;
}

export default function IconListItem({ children, className = '' }: IconListItemProps) {
  return (
    <li
      className={`rounded-full p-2 transition-opacity hover:opacity-50 active:opacity-80 ${className}`}>
      {children}
    </li>
  );
}
