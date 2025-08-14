"use server";

import { prisma } from "@/lib/prisma";
import { compareSync, hashSync } from "bcryptjs";
import { UpdatePasswordSchemaType } from "./schema";

export async function cekPasswordBenar(id: string, password: string) {
  const dataPengguna = await prisma.user.findUnique({
    where: { id },
    select: { password: true },
  });

  if (!dataPengguna) {
    return false;
  }

  const isPasswordMatch = compareSync(password, dataPengguna?.password);

  return isPasswordMatch;
}

export async function updatePassword(payload: UpdatePasswordSchemaType) {
  const hashedPassword = hashSync(payload.newPassword, 10);

  const updatePengguna = await prisma.user.update({
    where: {
      id: payload.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  console.log(updatePengguna);

  return { success: true };
}
