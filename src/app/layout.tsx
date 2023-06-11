import { Nunito } from 'next/font/google';

import '@/styles/global.css';

import type { ReactNode } from 'react';

import NextAuthProvider from '@/app/providers';

interface RootProps {
  children: ReactNode;
  authDialogs: ReactNode;
}

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children, authDialogs }: RootProps) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <NextAuthProvider>
          {children}

          {authDialogs}
        </NextAuthProvider>
      </body>
    </html>
  );
}
