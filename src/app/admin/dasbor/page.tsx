"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Users, ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

export default function DasborPage() {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <div className="flex flex-col gap-4">
      {/* Judul dan deskripsi dihapus */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Total Pendapatan */}
        <Card
          className={`overflow-hidden bg-gradient-to-r from-blue-950 to-indigo-950 text-white transition-all duration-300 transform hover:scale-105 shadow-lg`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pendapatan
            </CardTitle>
            <DollarSign className="w-4 h-4 text-white dark:text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 45.231.890</div>
            <p className="text-xs text-white dark:text-black">
              +20.1% dari bulan lalu
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Penjualan */}
        <Card
          className={`overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-green-950 to-teal-950 text-white`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Penjualan</CardTitle>
            <ShoppingCart className="w-4 h-4 text-white dark:text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-white dark:text-black">
              +180.1% dari bulan lalu
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Produk Terjual */}
        <Card
          className={`overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-purple-950 to-pink-950 text-white`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Produk Terjual
            </CardTitle>
            <Package className="w-4 h-4 text-white dark:text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-white dark:text-black">
              +19% dari bulan lalu
            </p>
          </CardContent>
        </Card>

        {/* Card 4: Pengguna Aktif */}
        <Card
          className={`overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-yellow-950 to-orange-950 text-white`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Pengguna Aktif
            </CardTitle>
            <Users className="w-4 h-4 text-white dark:text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-white dark:text-black">
              +201 sejak jam lalu
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
