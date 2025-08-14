"server only";

import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { AdminProductGudangSearchParamsType } from "./search-params";

export async function getProductDataInGudang(
  input: AdminProductGudangSearchParamsType,
  inventory_id: number
) {
  type WhereClause = Prisma.productWhereInput;
  let whereClause: WhereClause = {
    deleted_at: null,
    inventory_id,
  };

  if (input.nama) {
    whereClause["name"] = {
      contains: input.nama,
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
