"server only";

import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AdminProductSearchParamsType } from "./search-params";

export async function getProductData(input: AdminProductSearchParamsType) {
  type WhereClause = Prisma.productWhereInput;
  let whereClause: WhereClause = {
    deleted_at: null,
  };

  const filtered = await prisma.product.count({
    where: { ...whereClause },
  });

  const data = await prisma.product.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: { ...whereClause },
    orderBy: {
      created_at: "desc",
    },
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
      inventory: {
        select: {
          name: true,
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getProductById(id: number) {
  return await prisma.product.findFirst({
    where: {
      id,
    },
    include: {
      variants: {
        select: {
          id: true,
          name: true,
          options: true,
        },
      },
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
      inventory: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function getAllProduct() {
  return await prisma.product.findMany();
}

export async function getAllCategoryIncludingProducts() {
  return await prisma.category.findMany({
    where: {
      deleted_at: null,
    },
    include: {
      product: {
        where: {
          deleted_at: null,
        },
        select: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
          id: true,
          name: true,
          sku: true,
          is_single_variant: true,
          price: true,
          stock: true,
          image: true,
          unit: true,
          inventory: {
            select: {
              name: true,
            },
          },
          variants: {
            select: {
              name: true,
              options: {
                select: {
                  option_value: true,
                  additional_price: true,
                  image: true,
                  sku: true,
                  stock: true,
                },
              },
            },
          },
        },
      },
    },
  });
}
