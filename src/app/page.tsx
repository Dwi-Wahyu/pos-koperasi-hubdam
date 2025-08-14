import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { KategoriSection } from "./_components/section/kategori-section";
import { HeroSection } from "./_components/section/hero-section";
import { LandingTopbar } from "./_components/landing-topbar";

export default async function LandingPage() {
  const topbarMenu = [];

  return (
    <div>
      <LandingTopbar />

      <HeroSection />

      {/* <div className="container mx-auto my-10 w-full">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Produk Kami</h1>
        <KategoriSection />
      </div> */}
    </div>
  );
}
