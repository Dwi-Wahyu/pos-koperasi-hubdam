"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { NavAdminMenuType } from "./admin-menu";

export function NavAdminMenu({
  navMenu,
  role,
}: {
  navMenu: NavAdminMenuType[];
  role: string;
}) {
  const { linkActive, setLinkActive } = useSidebar();

  return (
    <div className="pb-10">
      {navMenu.map((group, i) => {
        if (group.role.includes(role)) {
          return (
            <SidebarGroup key={i}>
              <SidebarGroupContent className="flex flex-col">
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

                <SidebarMenu>
                  {group.child.map((item, idx) => {
                    if (item.role.includes(role)) {
                      return (
                        <SidebarMenuItem key={idx}>
                          <SidebarMenuButton
                            isActive={linkActive === item.url}
                            asChild
                            tooltip={item.title}
                            onClick={() => setLinkActive(item.url)}
                          >
                            <Link href={item.url}>
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    }
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        }
      })}
    </div>
  );
}
