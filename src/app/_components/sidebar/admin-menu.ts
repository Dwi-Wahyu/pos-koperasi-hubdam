import { IconType } from "@/types/icon";
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

export type NavAdminItemType = {
  title: string;
  url: string;
  role: string[];
  icon: IconType;
};

export type NavAdminMenuType = {
  title: string;
  role: string[];
  child: NavAdminItemType[];
};

export const adminMenu: NavAdminMenuType[] = [
  {
    title: "Utama",
    role: ["admin", "cashier", "customer"],
    child: [
      {
        title: "Dasbor",
        url: "/admin/dasbor",
        role: ["admin", "cashier", "customer"],
        icon: LayoutDashboard,
      },
      {
        title: "Produk",
        url: "/admin/produk",
        role: ["admin", "cashier", "customer"],
        icon: IconPackage,
      },

      {
        title: "Kategori",
        url: "/admin/kategori",
        icon: TagsIcon,
        role: ["admin", "cashier"],
      },
      {
        title: "Gudang",
        url: "/admin/gudang",
        icon: WarehouseIcon,
        role: ["admin", "cashier"],
      },
    ],
  },
  {
    title: "Pengelolaan Transaksi",
    role: ["admin", "cashier"],
    child: [
      {
        title: "Transaksi",
        url: "/admin/transaksi",
        icon: ShoppingCartIcon,
        role: ["admin", "cashier", "customer"],
      },
      {
        title: "Laporan Penjualan",
        url: "/admin/laporan-penjualan",
        role: ["admin", "cashier"],
        icon: FileChartColumn,
      },
      // {
      //   title: "Pre Order",
      //   url: "/admin/preorder",
      //   icon: CalendarClockIcon,
      //   role: ["admin", "cashier", "customer"],
      // },
    ],
  },
  {
    title: "Manajemen Pengguna",
    role: ["admin"],
    child: [
      {
        title: "Administrator",
        url: "/admin/pengguna/admin",
        icon: IconUserShield,
        role: ["admin"],
      },
      {
        title: "Kasir",
        url: "/admin/pengguna/cashier",
        icon: User2,
        role: ["admin"],
      },
      {
        title: "Customer",
        url: "/admin/pengguna/customer",
        icon: User,
        role: ["admin"],
      },
    ],
  },
  {
    title: "Pengaturan",
    role: ["admin"],
    child: [
      {
        title: "Pengaturan Aplikasi",
        url: "/admin/pengaturan",
        icon: Settings,
        role: ["admin"],
      },
      {
        title: "Audit Log",
        url: "/admin/audit",
        icon: ClipboardCheckIcon,
        role: ["admin"],
      },
    ],
  },
];
