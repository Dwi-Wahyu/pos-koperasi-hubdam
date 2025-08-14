import { InferType, number, object, string, array, boolean } from "yup";

export const InputProductSchema = object({
  name: string().required("Nama produk wajib diisi"),
  image: string().nullable().default(null),
  categories: array(number()).default([]).optional(),
  inventory_id: number().nullable().default(null),
  price: number()
    .typeError("Harga Jual harus berupa angka")
    .required("Harga Jual wajib diisi."),
  cost: number()
    .typeError("Harga Modal harus berupa angka")
    .required("Harga Modal wajib diisi."),
  is_single_variant: boolean().default(false),
  unit: string().default("Pcs"),
  stock: number().default(0),
});

export type InputProductSchemaType = InferType<typeof InputProductSchema>;

export const UpdateProductSchema = object({
  id: number().required("ID Produk wajib diisi"),
  name: string().required("Nama produk wajib diisi"),
  image: string().nullable().default(null),
  categories: array(number()).default([]).optional(),
  price: number()
    .typeError("Harga Jual harus berupa angka")
    .required("Harga Jual wajib diisi."),
  cost: number()
    .typeError("Harga Modal harus berupa angka")
    .required("Harga Modal wajib diisi."),
  is_single_variant: boolean().default(false),
  unit: string().default("Pcs"),
  stock: number().default(0),
  inventory_id: number().nullable().default(null),
});

export type UpdateProductSchemaType = InferType<typeof UpdateProductSchema>;
