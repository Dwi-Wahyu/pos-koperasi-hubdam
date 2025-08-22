import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package2,
  ShoppingBag,
  SquareArrowOutUpRight,
  Store,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

export function LayananSection() {
  return (
    <div className="container px-5 md:px-0 pb-7 mx-auto mt-16 w-full min-h-screen gap-7 flex-col flex">
      <h1 className="font-bold text-2xl">Layanan Yang Kami Sediakan</h1>

      <div className=" gap-7 flex flex-wrap justify-center">
        <Link
          href={"/mitra/koperasi/pendaftaran"}
          className="bg-center flex-1/3 bg-cover rounded-xl bg-[url('/backgrounds/koperasi-bg.png')] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer group"
        >
          <div className="flex flex-col p-5 gap-4 rounded-xl bg-black/60 w-full">
            <div className="flex items-center gap-2">
              <Store className="" />
              <h1 className=" md:text-lg font-bold">
                Perluas Pasar, Mudahkan Operasi. Koperasi Naik Kelas.
              </h1>
            </div>
            <h1>
              Koperasi Anda adalah tulang punggung ekonomi. Kini saatnya
              menjangkau lebih banyak pelanggan dan distributor tanpa kerumitan.
              Platform kami dirancang khusus untuk mempermudah Anda menjual
              produk, mengelola pesanan, dan memperluas jaringan bisnis. Kami
              percaya potensi produk lokal harus dinikmati oleh semua.
            </h1>

            <Button
              variant={"link"}
              className="w-fit group-hover:underline p-0 cursor-pointer"
            >
              Bergabunglah dengan Jaringan Kami
            </Button>
          </div>
        </Link>

        <Link
          href={"/mitra/distributor/pendaftaran"}
          className="bg-center flex-1/3 bg-cover rounded-xl bg-[url('/backgrounds/distributor-bg.png')] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer group"
        >
          <div className="flex flex-col p-5 gap-4 rounded-xl bg-black/60 w-full">
            <div className="flex items-center gap-2">
              <Package2 className="" />
              <h1 className=" md:text-lg font-bold">
                Rantai Pasok Efisien. Keuntungan Maksimal.
              </h1>
            </div>
            <h1>
              Semua yang Anda butuhkan ada di satu tempat. Kelola inventaris,
              lacak pengiriman, dan optimalkan setiap pesanan dari dasbor
              terpadu. Hemat waktu dan energi Anda dengan sistem yang
              terintegrasi penuh. Dengan bekerja sama dengan koperasi lokal,
              Anda tidak hanya meningkatkan keuntungan, tetapi juga
              berkontribusi pada kemajuan ekonomi nasional.
            </h1>

            <Button
              variant={"link"}
              className="w-fit group-hover:underline p-0 cursor-pointer"
            >
              Mulai Optimalkan Bisnis Anda
            </Button>
          </div>
        </Link>

        <Link
          href={"/register"}
          className="bg-center w-full md:w-1/2 bg-cover rounded-xl bg-[url('/backgrounds/customer-bg.png')] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer group"
        >
          <div className="flex flex-col p-5 gap-4 rounded-xl bg-black/60 w-full">
            <div className="flex items-center gap-2">
              <ShoppingBag />
              <h1 className=" md:text-lg font-bold">
                Belanja Langsung dari Sumbernya. Kualitas Terjamin.
              </h1>
            </div>
            <h1>
              Mencari produk yang otentik dan berkualitas? Di sini Anda bisa
              berbelanja langsung dari koperasi produsen. Setiap produk yang
              kami tawarkan berasal dari sumber yang jelas. Anda tidak perlu
              lagi ragu tentang kualitas dan keasliannya. Nikmati pengalaman
              belanja yang mudah dan menyenangkan, sambil mendukung para
              pengrajin dan petani lokal.
            </h1>

            <Button
              variant={"link"}
              className="w-fit group-hover:underline p-0 cursor-pointer"
            >
              Temukan Produk Favorit Anda
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
