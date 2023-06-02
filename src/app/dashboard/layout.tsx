import '@/styles/global.css';

import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <h2>DashboardLayout</h2>

      {children}
    </div>
  );
}
