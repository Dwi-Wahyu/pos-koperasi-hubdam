"use client";

import GooeyNav from "@/components/reactbits/GooeyNav/GooeyNav";
import { usePathname } from "next/navigation";

export function LandingTopbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Produk", href: "/produk" },
    { label: "Pre Order", href: "/pre-order" },
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
    <div className="w-full absolute top-0 left-0 mx-auto mb-5 py-7 ">
      <div className="container relative mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/sidebar-logo2.svg" alt="" />

          <div>
            <h1 className="font-bold text-2xl">KOMLEKDAM XIV HASANUDDIN</h1>
          </div>
        </div>

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
  );
}
