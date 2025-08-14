"use client";

import GooeyNav from "@/components/reactbits/GooeyNav/GooeyNav";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function LandingTopbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Produk", href: "/produk" },
    { label: "Login", href: "/login" },
  ];

  const pathname = usePathname();

  function getInitialActiveIndex(): number {
    let count = 0;

    for (const item of items) {
      if (item.href === pathname) {
        return count;
      }

      count++;
    }

    return count;
  }

  return (
    <div className="w-full absolute px-5 md:px-0 top-0 left-0 mx-auto mb-5 py-7 ">
      <div className="container relative mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/sidebar-logo2.svg" className="w-10 h-10" alt="" />

          <div>
            <h1 className="hidden md:block font-bold text-2xl">
              KOMLEKDAM XIV HASANUDDIN
            </h1>
          </div>
        </div>

        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex justify-center pb-10">
                <DrawerTitle className="text-center mb-5 text-xl font-semibold">
                  Menu Navigasi
                </DrawerTitle>
                <GooeyNav
                  items={items}
                  particleCount={15}
                  particleDistances={[90, 10]}
                  particleR={100}
                  initialActiveIndex={getInitialActiveIndex()}
                  animationTime={600}
                  timeVariance={300}
                  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                  orientation="vertical"
                />
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="overflow-clip hidden md:block">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={getInitialActiveIndex()}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </div>
  );
}
