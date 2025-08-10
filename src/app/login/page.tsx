import { redirect } from "next/navigation";
import { auth } from "@/config/auth";
import LoginForm from "./login-form";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    const now = new Date();
    const expires = new Date(session.expires);

    if (now < expires) {
      redirect("/admin");
    }
  }

  return (
    <div className="bg-[url('/bg-login.png')] bg-center bg-cover flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
