import { z } from "zod";

export const InputProductVariantSchema = z.object({
  product_id: z.number(),
  name: z.string().min(1, "Nama varian produk wajib diisi"),
});

export type InputProductVariantSchemaType = z.infer<
  typeof InputProductVariantSchema
>;

export const UpdateProductVariantSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Nama varian produk wajib diisi"),
});

export type UpdateProductVariantSchemaType = z.infer<
  typeof UpdateProductVariantSchema
>;
