import z from "zod";

export const InputGudangSchema = z.object({
  name: z.string().min(1, "Nama gudang harus diisi"),
});

export type InputGudangSchemaType = z.infer<typeof InputGudangSchema>;

export const UpdateGudangSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Nama gudang harus diisi"),
});

export type UpdateGudangSchemaType = z.infer<typeof UpdateGudangSchema>;
