import type { ReactNode } from 'react';

import Link from 'next/link';

import LogoButton from '@/components/ui/LogoButton';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden px-16">
      <header className="flex items-center p-2">
        <LogoButton hasLabel />
      </header>

      <main className="flex w-full max-w-6xl grow flex-col justify-center self-center">
        {children}
      </main>

      <footer className="p-2">
        <Link href="https://github.com/slvstr-dev/">
          <p className="text-center text-gray-500 transition-opacity hover:opacity-50">
            &copy; {new Date().getFullYear()} slvstr.dev
          </p>
        </Link>
      </footer>
    </div>
  );
}
