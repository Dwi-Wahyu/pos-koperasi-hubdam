import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      avatar: string;
      role: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    avatar: string;
    role: string;
  }
}
