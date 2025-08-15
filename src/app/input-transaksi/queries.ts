"server only";

import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { CashierProductSearchParamsType } from "./search-params";

export async function getProductDataForCashier(
  input: CashierProductSearchParamsType
) {
  type WhereClause = Prisma.productWhereInput;
  let whereClause: WhereClause = {
    deleted_at: null,
  };

  if (input.categories.length) {
    whereClause["categories"] = {
      some: {
        id: { in: input.categories },
      },
    };
  }

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
      variants: {
        include: {
          options: true,
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
