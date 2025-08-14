"server only";

import { Prisma } from "@/app/generated/prisma";
import { prisma } from "@/lib/prisma";
import { UserSearchParamsType } from "./search-params";

export async function getUserData(input: UserSearchParamsType) {
  type WhereClause = Prisma.userWhereInput;
  let whereClause: WhereClause = {
    deleted_at: null,
    role: input.role,
    name: {
      contains: input.name,
    },
  };

  const filtered = await prisma.user.count({
    where: { ...whereClause },
  });

  const data = await prisma.user.findMany({
    take: input.perPage,
    skip: (input.page - 1) * input.perPage,
    where: { ...whereClause },
    orderBy: {
      createdAt: "desc",
    },
  });

  const pageCount = Math.ceil(filtered / input.perPage);

  return { data, pageCount, filtered };
}

export async function getUserById(id: string) {
  return await prisma.user.findFirst({
    where: {
      id,
    },
  });
}

export async function getAllUser() {
  return await prisma.product.findMany();
}
