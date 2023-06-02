/* eslint-disable unicorn/filename-case */

import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id?: string | null;
    } & DefaultSession['user'];
  }
}
