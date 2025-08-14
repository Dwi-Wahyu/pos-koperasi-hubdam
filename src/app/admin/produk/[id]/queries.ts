"server only";

import { prisma } from "@/lib/prisma";

export async function getProductVariantById(id: number) {
  return await prisma.product_variant.findFirst({
    where: {
      id,
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      options: {
        select: {
          option_value: true,
          stock: true,
          additional_price: true,
          sku: true,
          image: true,
        },
      },
    },
  });
}

export async function getProductVariantOptionById(id: number) {
  return await prisma.product_option.findFirst({
    where: {
      id,
    },
    include: {
      variant: {
        select: {
          id: true,
          name: true,
          product: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
}
