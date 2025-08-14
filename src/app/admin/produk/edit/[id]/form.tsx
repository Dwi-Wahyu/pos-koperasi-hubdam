"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NotificationDialog } from "@/components/notification-dialog";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconLoader, IconPlus } from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { Label } from "@/components/ui/label";
import { SelectWithSearch } from "@/components/select-with-search";
import MultiSelect from "@/components/multi-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProduct, uploadGambar } from "../../actions";
import { getAllGudang } from "@/app/admin/gudang/queries";
import { UpdateProductSchema, UpdateProductSchemaType } from "../../schema";
import { getProductById } from "../../queries";
import { getAllCategory } from "@/app/admin/kategori/queries";
import { Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function UpdateProdukForm({
  initialData,
  allCategories,
  allGudang,
}: {
  initialData: NonNullable<Awaited<ReturnType<typeof getProductById>>>;
  allCategories: Awaited<ReturnType<typeof getAllCategory>>;
  allGudang: Awaited<ReturnType<typeof getAllGudang>>;
}) {
  const form = useForm<UpdateProductSchemaType>({
    resolver: yupResolver(UpdateProductSchema),
    defaultValues: {
      id: initialData.id,
      name: initialData.name,
      inventory_id: initialData.inventory_id,
      image: initialData.image,
      price: initialData.price,
      cost: initialData.cost,
      categories: initialData.categories.map((category) => category.id),
      is_single_variant: initialData.is_single_variant,
      stock: initialData.stock ?? 0,
      unit: initialData.unit ?? "Pcs",
      sku: initialData.sku ?? "",
      description: initialData.description ?? "",
    },
  });

  const [files, setFiles] = useState<File[]>([]);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan data prajurit. Silakan coba lagi."
  );

  const onSubmit = async (payload: UpdateProductSchemaType) => {
    console.log(payload);

    if (files.length > 0) {
      payload.image = await uploadGambar(files[0], payload.name);
    }

    const result = await updateProduct(payload);

    if (result.success) {
      setIsSuccessOpen(true);
    } else {
      setErrorMessage(result.error.message);
      setIsErrorOpen(true);
    }
  };

  const categoriesOption = allCategories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const watchIsSingleVariant = form.watch("is_single_variant");
  const watchUnit = form.watch("unit");

  useEffect(() => {
    if (!watchIsSingleVariant) {
      form.setValue("stock", 0);
    }
  }, [form, watchIsSingleVariant]);

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

      <Card className="w-full relative max-w-2xl shadow-none">
        <Button
          className="top-6 hidden lg:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href="/admin/produk">
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Update Produk</CardTitle>
          <CardDescription>Sertakan data yang dibutuhkan</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Produk </FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: Radio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sku"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SKU</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <FormControl>
                      <MultiSelect<number>
                        options={categoriesOption}
                        selectedValues={field.value as number[]}
                        setSelectedValues={field.onChange}
                        placeholder="Pilih kategori"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga Modal</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 3000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Harga Jual</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: 5000" {...field} />
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

              {watchIsSingleVariant && (
                <>
                  <FormField
                    control={form.control}
                    name="unit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Produk</FormLabel>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Pcs, Liter, Kilogram" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["Pcs", "Liter", "Kilogram"].map((unit, idx) => (
                              <SelectItem value={unit} key={idx}>
                                {unit}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stok</FormLabel>
                        <FormControl>
                          <div className="flex rounded-md shadow-xs">
                            <Input
                              type="number"
                              placeholder="Contoh: 3000"
                              className="-me-px rounded-e-none shadow-none"
                              {...field}
                            />

                            <span className="border-input bg-card text-muted-foreground inline-flex items-center rounded-e-md border px-3 text-sm">
                              {watchUnit ?? "Unit"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="inventory_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gudang</FormLabel>
                    <Select
                      defaultValue={initialData.inventory_id?.toString()}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Gudang" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {allGudang.map((gudang) => (
                          <SelectItem
                            value={gudang.id.toString()}
                            key={gudang.id}
                          >
                            {gudang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full">
                <Label className="mb-3">Gambar</Label>

                <FileUploadImage
                  multiple={false}
                  initialPreviewUrl={initialData.image}
                  onFilesChange={(newFiles) => {
                    setFiles(newFiles);
                  }}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  className="inline-flex lg:hidden"
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
                      <Save />
                      Simpan
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
