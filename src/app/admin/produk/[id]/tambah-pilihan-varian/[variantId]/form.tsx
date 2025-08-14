"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { useState } from "react";
import { NotificationDialog } from "@/components/notification-dialog";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconLoader, IconPlus } from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { Label } from "@/components/ui/label";
import {
  InputProductVariantOptionSchema,
  InputProductVariantOptionSchemaType,
} from "./schema";
import { getProductVariantById } from "../../queries";
import { uploadGambar } from "../../../actions";
import { createProductVariantOption } from "./action";
import { Textarea } from "@/components/ui/textarea";

export function TambahPilihanVarianProdukForm({
  variantData,
}: {
  variantData: NonNullable<Awaited<ReturnType<typeof getProductVariantById>>>;
}) {
  const form = useForm<InputProductVariantOptionSchemaType>({
    resolver: yupResolver(InputProductVariantOptionSchema),
    defaultValues: {
      option_value: "",
      variant_id: variantData.id,
      stock: 0,
      image: null,
      additional_price: 0,
      sku: "",
      description: "",
    },
  });

  const [files, setFiles] = useState<File[]>([]);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan data prajurit. Silakan coba lagi."
  );

  const onSubmit = async (payload: InputProductVariantOptionSchemaType) => {
    if (files.length > 0) {
      payload.image = await uploadGambar(files[0], payload.option_value);
    }

    const result = await createProductVariantOption(payload);

    if (result.success) {
      setIsSuccessOpen(true);
      form.reset();
      setFiles([]);
    } else {
      setErrorMessage(result.error.message);
      setIsErrorOpen(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Produk telah berhasil disimpan."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal Menyimpan Produk!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-xl shadow-none">
        <Button
          className="top-6 hidden md:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href={`/admin/produk/${variantData.product_id}`}>
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Tambah Pilihan Varian Produk</CardTitle>
          <CardDescription>Sertakan data yang dibutuhkan</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-6"
            >
              <div>
                <FormLabel className="mb-3">Produk</FormLabel>

                <Input value={variantData.product.name} disabled />
              </div>

              <div>
                <FormLabel className="mb-3">Varian</FormLabel>

                <Input value={variantData.name} disabled />
              </div>

              <FormField
                control={form.control}
                name="sku"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: PULPEN-MERAH" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="option_value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Pilihan</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: Merah" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi (Opsional)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additional_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga Tambahan</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 5000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stok Awal</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full">
                <Label className="mb-3">Gambar (Opsional)</Label>

                <FileUploadImage
                  multiple={false}
                  onFilesChange={(newFiles) => {
                    setFiles(newFiles);
                  }}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  className="inline-flex md:hidden"
                  variant={"secondary"}
                  asChild
                >
                  <Link href="/admin/produk">
                    <IconChevronLeft />
                    Kembali
                  </Link>
                </Button>

                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <IconLoader className="animate-spin" />
                      Loading . . .
                    </>
                  ) : (
                    <>
                      <IconPlus />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
