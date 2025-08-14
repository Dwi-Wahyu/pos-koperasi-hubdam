import z from "zod";

export const InputCategorySchema = z.object({
  name: z.string().min(1, "Nama gudang harus diisi"),
});

export type InputCategorySchemaType = z.infer<typeof InputCategorySchema>;
