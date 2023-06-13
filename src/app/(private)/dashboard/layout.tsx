import { Suspense, type ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import Sidebar from '@/components/ui/Sidebar';
import SidebarSkeleton from '@/components/ui/SidebarSkeleton';
import { authOptions } from '@/database/options';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin');
  }

  return (
    <div className="flex min-h-screen flex-row bg-white text-gray-800">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>

      <main className="flex grow flex-col">
        <div className="h-full bg-gray-50 p-4">{children}</div>
      </main>
    </div>
  );
}
