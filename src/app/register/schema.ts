import { InferType, number, object, string, array, boolean } from "yup";

export const InputUserSchema = object({
  name: string().required("Nama wajib diisi"),
  email: string().email("Email tidak valid").required("Email wajib diisi"),
  password: string().required("Password wajib diisi"),
  role: string()
    .oneOf(["ADMIN", "CASHIER", "CUSTOMER"], "Role tidak valid")
    .required("Wajib Memilih Role"),
});

export type InputUserSchemaType = InferType<typeof InputUserSchema>;

export const UpdateUserSchema = object({
  id: number().required("ID Produk wajib diisi"),
  name: string().required("Nama produk wajib diisi"),
  email: string().email("Email tidak valid").required("Email wajib diisi"),
  role: string()
    .oneOf(["ADMIN", "CASHIER", "CUSTOMER"], "Role tidak valid")
    .required("Wajib Memilih Role"),
});

export type UpdateUserSchemaType = InferType<typeof UpdateUserSchema>;
