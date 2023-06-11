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
    <div className="flex min-h-screen flex-row bg-gray-50 text-gray-800">
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>

      <main className="-ml-48 flex grow flex-col transition-all duration-150 ease-in md:ml-0">
        <div className="h-full bg-white p-4">{children}</div>
      </main>
    </div>
  );
}
