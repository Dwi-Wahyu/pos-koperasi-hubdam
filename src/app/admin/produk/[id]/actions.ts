"use server";

import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { revalidatePath } from "next/cache";
import {
  InputProductVariantSchemaType,
  UpdateProductVariantSchemaType,
} from "./schema";

export async function createProductVariant(
  payload: InputProductVariantSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const create = await prisma.product_variant.create({
      data: payload,
    });

    console.log(create);

    revalidatePath("/admin/produk/" + create.product_id);

    return successResponse(undefined, "Varian Produk Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating varian produk:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Varian Produk sudah digunakan. ",
            "DUPLICATE_NAME"
          );
        }
        return errorResponse(
          `Field sudah ${targetField} digunakan`,
          "DUPLICATE_ENTRY"
        );
      }
    }

    return errorResponse(
      "Terjadi kesalahan saat menambahkan varian produk: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function updateProductVariant(
  payload: UpdateProductVariantSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const update = await prisma.product_variant.update({
      where: {
        id: payload.id,
      },
      data: {
        name: payload.name,
      },
    });

    revalidatePath("/admin/produk/" + update.product_id);

    console.log(update);

    return successResponse(undefined, "Varian Produk Berhasil Disimpan");
  } catch (e: any) {
    console.error("Error updating varian:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Varian Produk sudah digunakan. ",
            "DUPLICATE_NAME"
          );
        }
        return errorResponse(
          `Field sudah ${targetField} digunakan`,
          "DUPLICATE_ENTRY"
        );
      }
    }

    return errorResponse(
      "Terjadi kesalahan saat menyimpan varian: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteVariant(
  id: number
): Promise<ServerActionReturn<void>> {
  try {
    await prisma.product_option.updateMany({
      where: {
        variant_id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    const updated = await prisma.product_variant.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    // todo: cari cara update produk yang kategori nya dihapus (sepertinya gunakan looping akan lambat)

    revalidatePath("/admin/produk/" + updated.product_id);

    return successResponse(undefined, "Produk Berhasil Dihapus");
  } catch (e: any) {
    console.log(e);

    return errorResponse(
      "Terjadi kesalahan saat menambahkan blok: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteVariantOption(
  id: number
): Promise<ServerActionReturn<void>> {
  try {
    const updated = await prisma.product_option.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
      include: {
        variant: {
          select: {
            product_id: true,
          },
        },
      },
    });

    revalidatePath("/admin/produk/" + updated.variant.product_id);

    return successResponse(undefined, "Produk Berhasil Dihapus");
  } catch (e: any) {
    console.log(e);

    return errorResponse(
      "Terjadi kesalahan saat menambahkan blok: " + e.message,
      "SERVER_ERROR"
    );
  }
}
