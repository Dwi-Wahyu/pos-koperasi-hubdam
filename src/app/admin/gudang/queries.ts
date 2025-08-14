"server only";

import { prisma } from "@/lib/prisma";

export async function getAllGudang() {
  return await prisma.inventory.findMany({
    where: {
      deleted_at: null,
    },
  });
}
