import '@Styles/global.css';

import type { ReactNode } from 'react';

import NextAuthProvider from '@App/providers';

interface RootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <h1>RootLayout</h1>

          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
