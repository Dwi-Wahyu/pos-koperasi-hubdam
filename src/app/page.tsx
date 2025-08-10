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

      <div className="container mx-auto my-10">
        <KategoriSection />
      </div>
    </div>
  );
}
