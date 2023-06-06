import { Nunito } from 'next/font/google';

import '@/styles/global.css';

import type { ReactNode } from 'react';

import NextAuthProvider from '@/app/providers';

interface RootProps {
  children: ReactNode;
}

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
