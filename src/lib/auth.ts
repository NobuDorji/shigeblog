import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { JWT } from "next-auth/jwt";
import { prisma } from '@/lib/prisma'

// JWTとSessionに追加する独自プロパティ型（拡張用）
type ExtendedToken = JWT & {
  id?: string;
  email?: string;
  image?: string | null;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // ここでDBにユーザーが存在しなければ登録
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });
  
        if (!existingUser) {
          await prisma.user.create({
            data: {
              id: user.id as string,
              email: user.email!,
              image: user.image ?? null,
              name: user.name ?? null,
            },
          });
        }
  
        token.id = user.id as string;
        token.email = user.email ?? undefined;
        token.image = user.image ?? null;
      }
  
      return token;
    },
    async session({ session, token }) {
      // session.user は手動で上書き
      session.user = {
        ...session.user,
        id: (token as ExtendedToken).id as string,
        email: (token as ExtendedToken).email,
        image: (token as ExtendedToken).image,
      };
      return session;
    },
  },
};