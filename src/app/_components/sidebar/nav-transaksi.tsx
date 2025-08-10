"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { IconType } from "@/types/icon";
import Link from "next/link";

export function NavTransaksi({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: IconType;
  }[];
}) {
  const { linkActive, setLinkActive } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pengelolaan Transaksi</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              isActive={linkActive === item.url}
              asChild
              tooltip={item.title}
              onClick={() => setLinkActive(item.url)}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
