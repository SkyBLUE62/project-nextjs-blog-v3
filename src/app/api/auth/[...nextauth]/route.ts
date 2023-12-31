import  { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/db/prisma'

export const authOptions: NextAuthOptions = {
    pages: {
      signIn: '/login'
    },
    session: {
      strategy: 'jwt'
    },
    providers: [
      CredentialsProvider({
        name: 'Sign in',
        credentials: {
          email: {
            label: 'Email',
            type: 'email',
            placeholder: 'hello@example.com'
          },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials.password) {
            return null
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })
  
          if (!user) {
            console.log("Utilisateur non trouvé.");
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password, 
            user.password 
          );


          if (!isPasswordValid) {
            console.log("Mot de passe incorrect.");
            return null;
          }

          console.log("Authentification réussie !");
          return user
        }
      })
    ],
    callbacks: {
      session: ({ session, token }) => {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id as string,
            email: token.email,
            name: token.name,
            role: token.role as string,
            randomKey: token.randomKey as string,
          }
        }
      },
      jwt: ({ token, user }) => {
        if (user) {
          const u = user as unknown as any
          return {
            ...token,
            id: u.id as string,
            role: u.role as string,
            randomKey: u.randomKey as string
          }
        }
        return token
      }
    }
  }
  
  const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST }