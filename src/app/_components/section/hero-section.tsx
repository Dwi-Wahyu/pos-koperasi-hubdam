import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export function HeroSection() {
  return (
    <div className="container mx-auto pt-[7.2rem]">
      <div className="w-full pt-10 rounded-xl flex flex-col justify-center bg-[url('/bg-login.png')] bg-center bg-cover">
        <div className=" flex h-full w-full items-center justify-between px-10">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Koperasi Komlekdam</h1>
            <h1 className="">
              E-Commerce Resmi Koperasi Komlekdam XIV Hasanuddin
            </h1>

            <Button size={"lg"}>
              <ShoppingCart />
              <h1 className="text-lg font-semibold">Belanja Sekarang</h1>
            </Button>
          </div>

          <img src="/kakomlekdam.png" alt="" />
        </div>
      </div>
    </div>
  );
}
