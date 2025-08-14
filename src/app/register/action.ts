"use server";

import { prisma } from "@/lib/prisma";
import { InputUserSchemaType } from "./schema";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { ServerActionReturn } from "@/types/server-action";

export async function createCustomer(
  payload: InputUserSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const create = await prisma.user.create({
      data: payload,
    });

    return successResponse(undefined, "Produk Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating customer:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Nama Produk sudah digunakan. ",
            "DUPLICATE_NAME"
          );
        }
        return errorResponse(
          `Nilai unik sudah ada untuk ${targetField}.`,
          "DUPLICATE_ENTRY"
        );
      }
    }

    return errorResponse(
      "Terjadi kesalahan saat menambahkan kustomer: " + e.message,
      "SERVER_ERROR"
    );
  }
}
