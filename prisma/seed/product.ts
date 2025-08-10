import { PrismaClient } from "@/app/generated/prisma";

export async function seedProducts(prisma: PrismaClient) {
  const categories = await prisma.category.findMany();

  // Contoh: Nasi Goreng (kategori makanan) dengan varian "Level Pedas" dan opsi "Sedang", "Pedas"
  const product = await prisma.product.create({
    data: {
      name: "Nasi Goreng",
      category: { connect: { id: categories[0].id } },
      variants: {
        create: [
          {
            name: "Level Pedas",
            options: {
              create: [
                {
                  sku: "NASGOR-SEDANG",
                  price: 15000,
                  cost: 10000,
                  stock: 50,
                  option_value: "Sedang",
                },
                {
                  sku: "NASGOR-PEDAS",
                  price: 16000,
                  cost: 11000,
                  stock: 50,
                  option_value: "Pedas",
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Contoh: Teh Botol (kategori minuman) tanpa varian
  await prisma.product.create({
    data: {
      name: "Teh Botol",
      category: { connect: { id: categories[1].id } },
      variants: {
        create: [
          {
            name: "Kemasan",
            options: {
              create: [
                {
                  sku: "TEHBOTOL-REG",
                  price: 5000,
                  cost: 3000,
                  stock: 200,
                  option_value: "Reguler",
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Contoh: Pulpen (kategori alat tulis) dengan varian warna
  await prisma.product.create({
    data: {
      name: "Pulpen",
      category: { connect: { id: categories[2].id } },
      variants: {
        create: [
          {
            name: "Warna",
            options: {
              create: [
                {
                  sku: "PULPEN-BIRU",
                  price: 3000,
                  cost: 2000,
                  stock: 150,
                  option_value: "Biru",
                },
                {
                  sku: "PULPEN-HITAM",
                  price: 3000,
                  cost: 2000,
                  stock: 150,
                  option_value: "Hitam",
                },
              ],
            },
          },
        ],
      },
    },
  });
}
