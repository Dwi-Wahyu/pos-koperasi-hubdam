import { InferType, number, object, string, array, boolean } from "yup";

export const UserRole = {
  SUPERADMIN: "SUPERADMIN",
  SHOP_OWNER: "SHOP_OWNER",
  CUSTOMER: "CUSTOMER",
  CASHIER: "CASHIER",
  DISTRIBUTOR: "DISTRIBUTOR",
} as const;

export const InputUserSchema = object({
  name: string().required("Nama wajib diisi"),
  email: string()
    .email("Format email tidak valid")
    .required("Username wajib diisi"),
  password: string().required("Password wajib diisi"),
  role: string().oneOf(Object.values(UserRole)).default(UserRole.CUSTOMER),
  avatar: string().nullable().default(null),
});

export type InputUserSchemaType = InferType<typeof InputUserSchema>;

export const UpdateUserSchema = object({
  id: string().uuid("ID tidak valid").required("ID user wajib diisi"),
  name: string().required("Nama wajib diisi"),
  email: string()
    .email("Format email tidak valid")
    .required("Username wajib diisi"),
  password: string().default(""),
  role: string().oneOf(Object.values(UserRole)).required("Role wajib diisi"),
  avatar: string().nullable().default(null),
});

export type UpdateUserSchemaType = InferType<typeof UpdateUserSchema>;
