import { InferType, number, object, string } from "yup";

export const InputProductVariantOptionSchema = object({
  sku: string().required("SKU wajib diisi."),
  image: string().nullable().default(null),
  additional_price: number()
    .typeError("Harga Jual harus berupa angka")
    .required("Harga Jual wajib diisi."),
  stock: number()
    .typeError("Stok harus berupa angka")
    .required("Stok wajib diisi."),
  option_value: string().required("Nama Pilihan wajib diisi."),
  description: string().default(""),
  variant_id: number()
    .typeError("ID Varian harus berupa angka")
    .required("Varian wajib diisi."),
});

export type InputProductVariantOptionSchemaType = InferType<
  typeof InputProductVariantOptionSchema
>;
