import '@Styles/global.css';

import type { ReactNode } from 'react';

interface TodosLayoutProps {
  children: ReactNode;
}

export default function TodosLayout({ children }: TodosLayoutProps) {
  return (
    <div>
      <h2>TodosLayout</h2>

      {children}
    </div>
  );
}
