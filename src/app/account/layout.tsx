import '@/styles/global.css';

import type { ReactNode } from 'react';

interface AccountLayoutProps {
  children: ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div>
      <h2>AccountLayout</h2>

      {children}
    </div>
  );
}
