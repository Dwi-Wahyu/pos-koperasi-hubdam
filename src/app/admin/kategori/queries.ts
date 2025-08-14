"server only";

import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AdminCategorySearchParamsType } from "./search-params";

export async function getCategoryData(input: AdminCategorySearchParamsType) {
  type WhereClause = Prisma.categoryWhereInput;
  let whereClause: WhereClause = {
    deleted_at: null,
  };

  const filtered = await prisma.category.count({
    where: { ...whereClause },
  });

  const data = await prisma.category.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: { ...whereClause },
    orderBy: {
      created_at: "desc",
    },
    include: {
      product: {
        where: {
          deleted_at: null,
        },
        select: {
          id: true,
        },
      },
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getCategoryById(id: number) {
  return await prisma.category.findFirst({
    where: {
      id,
      deleted_at: null,
    },
  });
}

export async function getAllCategory() {
  return await prisma.category.findMany({
    where: {
      deleted_at: null,
    },
  });
}
