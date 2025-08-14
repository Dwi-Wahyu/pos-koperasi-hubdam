"use server";

import { prisma } from "@/lib/prisma";
import { InputGudangSchemaType, UpdateGudangSchemaType } from "./schema";
import { revalidatePath } from "next/cache";

export async function createGudang(payload: InputGudangSchemaType) {
  const create = await prisma.inventory.create({
    data: {
      name: payload.name,
    },
  });

  revalidatePath("/admin/gudang");

  return { success: true };
}

export async function updateGudang(payload: UpdateGudangSchemaType) {
  const update = await prisma.inventory.update({
    where: {
      id: payload.id,
    },
    data: {
      name: payload.name,
    },
  });

  revalidatePath("/admin/gudang");

  return { success: true };
}

export async function deleteGudang(id: number) {
  const deleted = await prisma.inventory.update({
    where: {
      id,
    },
    data: {
      deleted_at: new Date(),
    },
  });

  await prisma.product.updateMany({
    where: {
      inventory_id: id,
    },
    data: {
      inventory_id: null,
    },
  });

  revalidatePath("/admin/gudang");

  return { success: true };
}
