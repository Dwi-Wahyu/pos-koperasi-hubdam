import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/validations/schemas/auth";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const parsed = LoginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { username, password } = parsed.data;

        const user = await prisma.user.findFirst({
          where: { email: username },
        });

        if (!user) return null;

        const isValid = compareSync(password, user.password);

        if (!isValid) {
          return null;
        }

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            last_login: new Date(),
          },
        });

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.avatar ?? "uploads/avatar/default-avatar.jpg",
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/logout",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        session.user.avatar = token.avatar as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.avatar = user.avatar;
      }
      return token;
    },
  },
  trustHost: true,
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
