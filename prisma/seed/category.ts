import { PrismaClient } from "@/app/generated/prisma";

export async function seedCategories(prisma: PrismaClient) {
  await prisma.category.createMany({
    data: [{ name: "Makanan" }, { name: "Minuman" }, { name: "Alat Tulis" }],
    skipDuplicates: true,
  });
}
