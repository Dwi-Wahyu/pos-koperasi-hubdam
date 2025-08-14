"use client";

import { IconLoader } from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Scroller } from "../../../components/ui/scroller";
import { getSidebarMenu } from "./menu";
import { useSession } from "next-auth/react";
import { useRouter } from "nextjs-toploader/app";
import { NavAdminMenu } from "./nav-admin-menu";
import { adminMenu } from "./admin-menu";

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <LoadingSidebarMenu {...props} />;
  }

  if (!data) {
    router.push("/");
    return;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-2 pb-0 flex items-center justify-between">
            {open ? (
              <div className="flex items-center gap-2">
                <Image
                  src="/sidebar-logo2.svg"
                  width={40}
                  height={38}
                  alt="sidebar logo"
                />
                <div>
                  <h1 className="text-sm font-semibold">E-COMMERCE KOPERASI</h1>
                  <h1 className="text-xs text-muted-foreground">
                    Komlekdam XIV Hasanuddin
                  </h1>
                </div>
              </div>
            ) : (
              <Image
                src="/sidebar-logo2.svg"
                width={50}
                height={48}
                alt="sidebar logo"
              />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <Scroller orientation={"vertical"} hideScrollbar>
          <NavAdminMenu
            role={data.user.role.toLowerCase()}
            navMenu={adminMenu}
          />
        </Scroller>
      </SidebarContent>
    </Sidebar>
  );
}

function LoadingSidebarMenu({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-2 pb-0 flex items-center justify-between">
            <Image
              src="/sidebar-logo.svg"
              width={225}
              height={33}
              alt="sidebar logo"
              priority
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pb-10 pt-4 flex items-center justify-center">
        <IconLoader className="animate-spin" />
      </SidebarContent>
    </Sidebar>
  );
}
