"use client";

import { CalendarClockIcon, ShoppingCartIcon, HandCoins } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TransaksiPage() {
  const navItems = [
    {
      title: "Input Transaksi",
      description: "Buat transaksi baru untuk penjualan.",
      href: "/input-transaksi",
      icon: <ShoppingCartIcon className="h-7 w-7" />,
      iconBg: "bg-primary/20 text-primary",
    },
    {
      title: "Manajemen Penjualan",
      description: "Lihat dan kelola semua data penjualan.",
      href: "/admin/transaksi/penjualan",
      icon: <HandCoins className="h-7 w-7" />,
      iconBg: "bg-chart-2/20 text-chart-2",
    },
    {
      title: "Pre Order",
      description: "Kelola pesanan yang dibuat pelanggan di muka.",
      href: "/admin/transaksi/preorder",
      icon: <CalendarClockIcon className="h-7 w-7" />,
      iconBg: "bg-success/20 text-success",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          Transaksi
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Pilih salah satu menu di bawah ini untuk mengelola transaksi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="group block">
            <Card className="flex h-full flex-col gap-4 p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary border-transparent">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col flex-1">
                <CardTitle className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-1 text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
