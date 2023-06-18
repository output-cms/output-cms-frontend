import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

import { NextAuthOptions } from 'next-auth'

export const authOption: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
}

export default NextAuth(authOption)
