"use server";

import { errorResponse, successResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { ServerActionReturn } from "@/types/server-action";
import { revalidatePath } from "next/cache";
import { InputCategorySchemaType } from "./schema";

export async function deleteCategory(
  id: number
): Promise<ServerActionReturn<void>> {
  try {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    revalidatePath("/admin/kategori");

    return successResponse(undefined, "Kategori Berhasil Dihapus");
  } catch (e: any) {
    console.log(e);

    return errorResponse(
      "Terjadi kesalahan saat menambahkan blok: " + e.message,
      "SERVER_ERROR"
    );
  }
}

// todo: fix jika nama kategori ada yang sama
export async function createCategory(payload: InputCategorySchemaType) {
  const create = await prisma.category.create({
    data: {
      name: payload.name,
    },
  });

  revalidatePath("/admin/kategori");

  return { success: true };
}
