'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: ReactNode;
}

export default function NextAuthProvider({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
