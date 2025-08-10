import { PrismaClient } from "@/app/generated/prisma";

export async function seedInventories(prisma: PrismaClient) {
  // Ambil produk untuk relasi
  const products = await prisma.product.findMany();
  await prisma.inventory.createMany({
    data: [{ name: "Gudang Pusat Hubdam" }, { name: "Gudang Kasipernika" }],
    skipDuplicates: true,
  });
}
