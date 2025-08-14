import dotenv from "dotenv";
import { seedUsers } from "./user";
import { seedCategories } from "./category";
import { seedProducts } from "./product";
import { seedInventories } from "./inventory";
import { PrismaClient } from "@/app/generated/prisma";

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  // await seedUsers(prisma);
  // await seedCategories(prisma);
  await seedProducts(prisma);
  // await seedInventories(prisma);
  // console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
