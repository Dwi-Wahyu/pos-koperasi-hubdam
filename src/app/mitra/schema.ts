import { InferType, object, string } from "yup";

const shopStatusEnum = [
  "PENDING",
  "ACTIVE",
  "INACTIVE",
  "REJECTED",
  "SUSPENDED",
];

export const InputShopSchema = object({
  name: string()
    .trim()
    .min(3, "Nama toko minimal 3 karakter")
    .required("Nama toko wajib diisi"),
  address: string().trim().required("Alamat wajib diisi"),
  description: string().default(""),
  status: string<
    "PENDING" | "ACTIVE" | "INACTIVE" | "REJECTED" | "SUSPENDED"
  >().default("PENDING"),
  phone_number: string().default(""),
  email: string().trim().email("Format email tidak valid").default(""),
  tax_id: string().default(""),
  banner: string().default(""),
  logo: string().default(""),
  owner_id: string().trim().required("ID pemilik wajib diisi"), // Wajib ada untuk relasi
});

export type InputShopType = InferType<typeof InputShopSchema>;
