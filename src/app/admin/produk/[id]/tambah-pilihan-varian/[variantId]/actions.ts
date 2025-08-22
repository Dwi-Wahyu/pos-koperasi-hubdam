"use server";

import { ServerActionReturn } from "@/types/server-action";
import { InputProductVariantOptionSchemaType } from "./schema";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createProductVariantOption(
  payload: InputProductVariantOptionSchemaType
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

    return successResponse(undefined, "Varian Produk Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

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
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}
