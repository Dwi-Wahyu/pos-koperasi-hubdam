import { LandingTopbar } from "@/app/_components/landing-topbar";
import { LoginFirstIcon } from "@/components/icons/login-first";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/config/auth";
import { LogIn, Store } from "lucide-react";
import Link from "next/link";
import { SesiLoginNotFound } from "../../sesi-login-not-found";
import { PendaftaranKoperasiForm } from "./form";

export default async function PengajuanPendaftaranKoperasi() {
  const session = await auth();

  if (!session) {
    return <SesiLoginNotFound />;
  }

  return (
    <div className="relative">
      <LandingTopbar />

      <div className="container mx-auto pt-[6rem] relative z-20 px-5 md:px-0 mb-7 h-screen">
        <PendaftaranKoperasiForm userId={session.user.id} />
      </div>

      <Store className="w-80 h-80 opacity-30 z-10 fixed -right-14 -bottom-14 text-muted" />
    </div>
  );
}
