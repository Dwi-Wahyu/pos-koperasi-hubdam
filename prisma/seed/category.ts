import { PrismaClient } from "@/app/generated/prisma";

export async function seedCategories(prisma: PrismaClient) {
  await prisma.category.createMany({
    data: [
      { name: "Alat Elektronik" },
      { name: "Kebutuhan Sehari Hari" },
      { name: "Alat Tulis" },
    ],
    skipDuplicates: true,
  });
}
