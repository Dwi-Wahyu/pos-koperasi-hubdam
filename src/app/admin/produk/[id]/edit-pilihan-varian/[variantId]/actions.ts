"use server";

import { ServerActionReturn } from "@/types/server-action";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { UpdateProductVariantOptionSchemaType } from "./schema";

export async function updateProductVariantOption(
  payload: UpdateProductVariantOptionSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const create = await prisma.product_option.create({
      data: payload,
      include: {
        variant: {
          select: {
            product_id: true,
          },
        },
      },
    });

    console.log(create);

    revalidatePath("/admin/produk/" + create.variant.product_id);

    return successResponse(
      undefined,
      "Pilihan Varian Produk Berhasil Disimpan"
    );
  } catch (e: any) {
    console.error("Error creating pilihan varian produk:", e);

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
      "Terjadi kesalahan saat menambahkan pilihan varian produk: " + e.message,
      "SERVER_ERROR"
    );
  }
}
