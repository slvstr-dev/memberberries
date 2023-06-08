import type { ReactNode } from 'react';

import Sidebar from '@/components/ui/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-row bg-gray-50 text-gray-800">
      <Sidebar />

      <main className="-ml-48 flex grow flex-col transition-all duration-150 ease-in md:ml-0">
        <div className="h-full bg-white p-4">{children}</div>
      </main>
    </div>
  );
}
