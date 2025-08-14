"use server";

import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { revalidatePath } from "next/cache";
import { unlinkSync } from "fs";
import { join } from "path";
import { InputUserSchemaType, UpdateUserSchemaType } from "./schema";
import { hashSync } from "bcryptjs";

export async function uploadAvatar(file: File, name: string) {
  const storageService = new LocalStorageService();

  const avatarUrl = await storageService.uploadImage(file, name, "avatar");

  return avatarUrl;
}

export async function createUser(
  payload: InputUserSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { password, ...rest } = payload;

    const hashedPassword = hashSync(password, 10);

    const create = await prisma.user.create({
      data: {
        password: hashedPassword,
        ...rest,
      },
    });

    return successResponse(undefined, "Pengguna Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Nama Pengguna sudah digunakan. ",
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
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function updateUser(
  payload: UpdateUserSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { id, password, ...data } = payload;

    const findUser = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!findUser) {
      return errorResponse(`Pengguna tidak dapat ditemukan.`, "NOT_FOUND");
    }

    if (findUser.avatar) {
      unlinkSync(join(process.cwd(), "public", findUser.avatar));
    }

    if (password != "") {
      const hashedPassword = hashSync(password, 10);

      await prisma.user.update({
        where: {
          id,
        },
        data: {
          password: hashedPassword,
        },
      });
    }

    const update = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return successResponse(undefined, "Pengguna Berhasil Disimpan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        const targetField =
          (e.meta?.target as string[])?.join(", ") || "Unknown field";
        if (targetField.includes("name")) {
          return errorResponse(
            "Nama Pengguna sudah digunakan. ",
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
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteUser(
  id: string
): Promise<ServerActionReturn<void>> {
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (findUser?.avatar) {
      unlinkSync(join(process.cwd(), "public", findUser.avatar));
    }

    const update = await prisma.user.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
        avatar: null,
      },
    });

    revalidatePath("/admin/pengguna/" + findUser?.role.toLowerCase);

    return successResponse(undefined, "Pengguna Berhasil Dihapus");
  } catch (e: any) {
    console.log(e);

    return errorResponse(
      "Terjadi kesalahan saat menambahkan blok: " + e.message,
      "SERVER_ERROR"
    );
  }
}
