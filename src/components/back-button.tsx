"use client";

import { IconType } from "@/types/icon";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

export function BackButton({
  icon: Icon = ChevronLeft,
  text = "Kembali",
}: {
  icon?: IconType;
  text?: string;
}) {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.back();
      }}
      className="cursor-pointer"
      variant="outline"
    >
      <Icon className="h-4 w-4" />
      {text}
    </Button>
  );
}
