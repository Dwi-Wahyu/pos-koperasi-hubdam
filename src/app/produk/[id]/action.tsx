"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addProductRating(id: number, newRating: number) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      select: {
        total_rating: true,
        rating_count: true,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const newTotalRating = product.total_rating + newRating;
    const newRatingCount = product.rating_count + 1;

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        total_rating: newTotalRating,
        rating_count: newRatingCount,
      },
    });

    revalidatePath("/admin/" + id);

    return { success: true };
  } catch (error) {
    console.error("Error adding product rating:", error);
    throw new Error("Could not add product rating");
  }
}
