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
  WarehouseIcon,
} from "lucide-react";

export const adminMenu = {
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
    { title: "Gudang", url: "/admin/gudang", icon: WarehouseIcon },
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
  navUser: [
    {
      title: "Administrator",
      url: "/admin/pengguna?role=admin",
      icon: IconUserShield,
    },
    {
      title: "Kasir",
      url: "/admin/pengguna?role=cashier",
      icon: User2,
    },
    {
      title: "Customer",
      url: "/admin/pengguna?role=customer",
      icon: User,
    },
  ],
  navSetting: [
    {
      title: "Pengaturan Aplikasi",
      url: "/admin/pengaturan",
      icon: Settings,
    },
    {
      title: "Audit Log",
      url: "/admin/audit",
      icon: ClipboardCheckIcon,
    },
  ],
};
