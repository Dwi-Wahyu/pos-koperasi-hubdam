import { Card, CardContent } from "@/components/ui/card";
import { LandingTopbar } from "../_components/landing-topbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export function SesiLoginNotFound() {
  return (
    <div>
      <LandingTopbar />

      <div className="container mx-auto pt-[7rem] px-5 md:px-0 pb-7 h-screen">
        <Card className="max-w-2xl mx-auto border-none">
          <CardContent className="flex flex-col items-center justify-center gap-7">
            <div className="text-center">
              <h1 className="text-xl font-bold mb-1">
                Sesi Login Belum Terdeteksi
              </h1>
              <h1 className="text-muted-foreground">
                Login Atau Register Terlebih Dahulu Sebelum Membuat Pengajuan
              </h1>
            </div>

            <img src="/icons/login-first-icon.svg" className="w-sm" alt="" />

            <div className="flex gap-3 flex-col md:flex-row">
              <Button asChild variant={"outline"}>
                <Link href={"/login"}>
                  <LogIn />
                  Login
                </Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href={"/login"}>
                  <LogIn />
                  Register
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
