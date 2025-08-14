import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="container mx-auto pt-[7.2rem] px-5 md:px-0 pb-7">
      <div className="w-full pt-10 rounded-xl flex flex-col  justify-center bg-[url('/bg-login.png')] bg-center bg-cover">
        <div className=" flex h-full flex-col md:flex-row w-full items-center justify-between px-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-center md:text-start">
              Koperasi Komlekdam
            </h1>
            <h1 className="text-center md:text-start">
              E-Commerce Resmi Koperasi Komlekdam XIV Hasanuddin
            </h1>

            <div className="flex justify-center md:justify-start">
              <Button size={"lg"} asChild>
                <Link href={"/produk"}>
                  <ShoppingCart />
                  <h1 className="text-lg font-semibold">Belanja Sekarang</h1>
                </Link>
              </Button>
            </div>
          </div>

          <img src="/kakomlekdam.png" className="" alt="" />
        </div>
      </div>
    </div>
  );
}
