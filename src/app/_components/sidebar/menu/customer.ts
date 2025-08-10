import { IconPackage } from "@tabler/icons-react";

import {
  CalendarClockIcon,
  LayoutDashboard,
  ShoppingCartIcon,
  TagsIcon,
} from "lucide-react";

export const customerMenu = {
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
