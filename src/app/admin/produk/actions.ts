"use server";

import { PrismaClientKnownRequestError } from "@/app/generated/prisma/runtime/library";
import { errorResponse, successResponse } from "@/helper/action-helpers";
import { prisma } from "@/lib/prisma";
import { LocalStorageService } from "@/services/storage_services";
import { ServerActionReturn } from "@/types/server-action";
import { revalidatePath } from "next/cache";
import { InputProductSchemaType, UpdateProductSchemaType } from "./schema";
import { unlinkSync } from "fs";
import { join } from "path";

export async function uploadGambar(file: File, name: string) {
  const storageService = new LocalStorageService();

  const avatarUrl = await storageService.uploadImage(file, name, "produk");

  return avatarUrl;
}

export async function createProduct(
  payload: InputProductSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { categories, ...data } = payload;

    const create = await prisma.product.create({
      data,
    });

    if (categories.length) {
      for (const categoryId of categories) {
        await prisma.category.update({
          where: {
            id: categoryId,
          },
          data: {
            product: {
              connect: {
                id: create.id,
              },
            },
          },
        });
      }
    }

    return successResponse(undefined, "Produk Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

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
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function updateProduct(
  payload: UpdateProductSchemaType
): Promise<ServerActionReturn<void>> {
  try {
    const { categories, id, ...data } = payload;

    const prevProduct = await prisma.product.findFirst({
      where: {
        id,
      },
      include: {
        categories: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!prevProduct) {
      return errorResponse("Produk tidak ditemukan", "DUPLICATE_NAME");
    }

    for (const category of prevProduct.categories) {
      await prisma.category.update({
        where: {
          id: category.id,
        },
        data: {
          product: {
            disconnect: {
              id: category.id,
            },
          },
        },
      });
    }

    const create = await prisma.product.update({
      where: {
        id,
      },
      data,
    });

    if (categories.length) {
      for (const categoryId of categories) {
        await prisma.category.update({
          where: {
            id: categoryId,
          },
          data: {
            product: {
              connect: {
                id: create.id,
              },
            },
          },
        });
      }
    }

    return successResponse(undefined, "Produk Berhasil Ditambahkan");
  } catch (e: any) {
    console.error("Error creating prajurit:", e);

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
      "Terjadi kesalahan saat menambahkan prajurit: " + e.message,
      "SERVER_ERROR"
    );
  }
}

export async function deleteProduct(
  id: number
): Promise<ServerActionReturn<void>> {
  try {
    try {
      const findAllUptions = await prisma.product_option.findMany({
        where: {
          variant: {
            product_id: id,
          },
        },
      });

      const findProduct = await prisma.product.findFirst({
        where: {
          id,
        },
      });

      for (const option of findAllUptions) {
        if (option?.image) {
          unlinkSync(join(process.cwd(), "public/produk", option.image));
        }
      }

      if (findProduct?.image) {
        unlinkSync(join(process.cwd(), "public/produk", findProduct.image));
      }
    } catch (error) {
      console.log(error);
    }

    await prisma.product_option.updateMany({
      where: {
        variant: {
          product_id: id,
        },
      },
      data: {
        deleted_at: new Date(),
        image: null,
      },
    });

    await prisma.product_variant.updateMany({
      where: {
        product_id: id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
        image: null,
      },
    });

    revalidatePath("/admin/produk");

    return successResponse(undefined, "Produk Berhasil Dihapus");
  } catch (e: any) {
    console.log(e);

    return errorResponse(
      "Terjadi kesalahan saat menambahkan blok: " + e.message,
      "SERVER_ERROR"
    );
  }
}
