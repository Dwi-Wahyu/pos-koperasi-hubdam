"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { BreadcrumbProvider } from "@/context/breadcrumb-context";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NuqsAdapter>
        <BreadcrumbProvider>{children}</BreadcrumbProvider>
      </NuqsAdapter>
    </SessionProvider>
  );
}
