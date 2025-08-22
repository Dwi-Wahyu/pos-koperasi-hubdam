"use server";

import { prisma } from "@/lib/prisma";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";
import { ServerActionReturn } from "@/types/server-action";
import { InputShopType } from "./schema";
import { LocalStorageService } from "@/services/storage_services";

export async function uploadImage(
  file: File,
  name: string,
  mitraType: "distributor" | "koperasi"
) {
  const storageService = new LocalStorageService();

  const imageUrl = await storageService.uploadImage(file, name, mitraType);

  return imageUrl;
}

export async function createShop(
  payload: InputShopType
): Promise<ServerActionReturn<void>> {
  try {
    const { owner_id, ...data } = payload;

    const create = await prisma.shop.create({
      data: {
        owner: {
          connect: {
            id: owner_id,
          },
        },
        ...data,
      },
    });

    return successResponse(undefined, "Pendaftaran Koperasi Berhasil");
  } catch (e: any) {
    console.error("Error creating customer:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Nama Koperasi sudah digunakan. ",
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
      "Terjadi kesalahan saat pendaftaran koperasi",
      "SERVER_ERROR"
    );
  }
}
