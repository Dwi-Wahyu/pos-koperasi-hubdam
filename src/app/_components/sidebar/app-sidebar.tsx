"use client";

import { IconLoader } from "@tabler/icons-react";

import { NavMain } from "@/app/_components/sidebar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Scroller } from "../../../components/ui/scroller";
import { getSidebarMenu } from "./menu";
import { useSession } from "next-auth/react";
import { useRouter } from "nextjs-toploader/app";
import { NavSetting } from "./nav-setting";
import { NavUser } from "./nav-user";
import { NavTransaksi } from "./nav-transaksi";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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

  const menu = getSidebarMenu(data.user.role);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="p-2 pb-0 flex items-center justify-between">
            {open ? (
              <div className="flex items-center gap-2">
                <Image
                  src="/sidebar-logo2.svg"
                  width={50}
                  height={48}
                  alt="sidebar logo"
                />
                <div>
                  <h1 className="text-lg font-semibold">POINT OF SALE</h1>
                  <h1 className="text-xs text-muted-foreground">
                    Koperasi Komlekdam XIV Hasanuddin
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
      <SidebarContent className="pb-10">
        {/* <Scroller orientation={"vertical"} hideScrollbar> */}
        <NavMain items={menu.navMain} />

        {menu.navTransaksi.length != 0 && (
          <NavTransaksi items={menu.navTransaksi} />
        )}

        {menu.navUser.length != 0 && <NavUser items={menu.navUser} />}

        {menu.navSetting.length != 0 && <NavSetting items={menu.navSetting} />}

        <div className="flex w-full justify-center"></div>
        {/* </Scroller> */}
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
