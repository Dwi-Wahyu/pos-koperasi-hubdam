import { PrismaClient, user_role } from "@/app/generated/prisma";

import { hash } from "bcryptjs";

export async function seedUsers(prisma: PrismaClient) {
  const hashPassword = async (plain: string) => await hash(plain, 10);

  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPass = process.env.ADMIN_PASSWORD!;
  const cashierEmail = process.env.CASHIER_EMAIL!;
  const cashierPass = process.env.CASHIER_PASSWORD!;
  const customerEmail = process.env.CUSTOMER_EMAIL!;
  const customerPass = process.env.CUSTOMER_PASSWORD!;

  await prisma.user.createMany({
    data: [
      {
        name: "Admin 1",
        email: adminEmail,
        password: await hashPassword(adminPass),
        role: user_role.SUPERADMIN,
      },
      {
        name: "Kasir 1",
        email: cashierEmail,
        password: await hashPassword(cashierPass),
        role: user_role.CASHIER,
      },

      {
        name: "Pelanggan 1",
        email: customerEmail,
        password: await hashPassword(customerPass),
        role: user_role.CUSTOMER,
      },
    ],
    skipDuplicates: true,
  });
}
