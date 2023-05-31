import '@Styles/global.css';

import type { ReactNode } from 'react';

interface RemindersLayoutProps {
  children: ReactNode;
}

export default function RemindersLayout({ children }: RemindersLayoutProps) {
  return (
    <div>
      <h2>RemindersLayout</h2>

      {children}
    </div>
  );
}
