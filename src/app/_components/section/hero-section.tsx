import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShoppingCart, UserPlus } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="container mx-auto pt-[7.2rem] px-5 md:px-0 pb-7 h-screen">
      <div className="w-full pt-10 rounded-xl flex flex-col  justify-center bg-[url('/bg-login.png')] bg-center bg-cover">
        <div className=" flex h-full flex-col md:flex-row w-full items-center justify-between px-10">
          <div className="space-y-6">
            <h1 className="md:text-4xl text-2xl font-bold text-center md:text-start">
              Jaringan Koperasi dan Distributor Terpercaya
            </h1>
            <h1 className="text-center md:text-start">
              Temukan dan beli produk terbaik dari berbagai koperasi dan
              distributor di bawah naungan Komlekdam XIV Hasanuddin.
            </h1>

            <div className="flex md:flex-row flex-col justify-center gap-4 md:justify-start">
              <Button size={"lg"} className="w-fit" asChild>
                <Link href={"/produk"}>
                  <ShoppingCart />
                  <h1 className="text-lg font-semibold">Belanja Sekarang</h1>
                </Link>
              </Button>

              <Button size={"lg"} className="w-fit" variant={"outline"} asChild>
                <Link href={"/produk"}>
                  <UserPlus />
                  <h1 className="text-lg font-semibold">
                    Bergabung Dengan Kami
                  </h1>
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
