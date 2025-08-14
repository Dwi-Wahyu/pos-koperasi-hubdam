import { redirect } from "next/navigation";
import { auth } from "@/config/auth";
import LoginForm from "./login-form";
import Image from "next/image";

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
    <div className="bg-[url('/bg-login.png')] relative bg-center bg-cover flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <Image
        className="absolute left-5 top-5"
        src="/logo-tni-ad.png"
        alt="Image"
        width={40}
        height={40}
      />
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
