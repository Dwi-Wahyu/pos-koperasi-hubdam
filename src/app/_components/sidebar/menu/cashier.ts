import { IconPackage, IconUserShield } from "@tabler/icons-react";

import {
  CalendarClockIcon,
  ClipboardCheckIcon,
  FileChartColumn,
  LayoutDashboard,
  Settings,
  ShoppingCartIcon,
  TagsIcon,
  User,
  User2,
} from "lucide-react";

export const cashierMenu = {
  navMain: [
    {
      title: "Dasbor",
      url: "/admin/dasbor",
      icon: LayoutDashboard,
    },
    {
      title: "Produk",
      url: "/admin/produk",
      icon: IconPackage,
    },
    {
      title: "Laporan Penjualan",
      url: "/admin/laporan-penjualan",
      icon: FileChartColumn,
    },
    { title: "Kategori", url: "/admin/kategori", icon: TagsIcon },
  ],
  navTransaksi: [
    {
      title: "Transaksi",
      url: "/admin/transaksi",
      icon: ShoppingCartIcon,
    },
    {
      title: "Pre Order",
      url: "/admin/preorder",
      icon: CalendarClockIcon,
    },
  ],
  navUser: [],
  navSetting: [],
};
