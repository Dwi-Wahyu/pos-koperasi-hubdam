import { PrismaClient } from "@/app/generated/prisma";

export async function seedProducts(prisma: PrismaClient) {
  const categories = await prisma.category.findMany();
  const inventories = await prisma.category.findMany();

  const product = await prisma.product.create({
    data: {
      name: "Radio",
      cost: 150000,
      price: 200000,
      categories: { connect: { id: categories[0].id } },
      inventory: { connect: { id: inventories[0].id } },
      variants: {
        create: [
          {
            name: "Jenis",
            options: {
              create: [
                {
                  sku: "RADIO-WIRELESS",
                  additional_price: 150000,
                  stock: 50,
                  option_value: "Wireless",
                },
                {
                  sku: "RADIO-ANALOG",
                  additional_price: 100000,
                  stock: 50,
                  option_value: "Analog",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: "Beras",
      cost: 150000,
      price: 200000,
      categories: { connect: { id: categories[1].id } },
      inventory: { connect: { id: inventories[0].id } },
      is_single_variant: true,
      unit: "Liter",
      stock: 500,
    },
  });
}
