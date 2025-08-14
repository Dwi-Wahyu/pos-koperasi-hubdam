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
  FormDescription,
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
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@/components/ui/checkbox";
import { capitalizeFirstLetter } from "@/helper/capitalize-first-letter";
import { updateUser, uploadAvatar } from "../../actions";
import { UpdateUserSchema, UpdateUserSchemaType } from "../../schema";
import { getUserById } from "../../queries";
import { Save } from "lucide-react";

export function EditUserForm({
  role,
  initialData,
}: {
  role: "ADMIN" | "CASHIER" | "CUSTOMER";
  initialData: NonNullable<Awaited<ReturnType<typeof getUserById>>>;
}) {
  const form = useForm<UpdateUserSchemaType>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      id: initialData.id,
      name: initialData.name,
      email: initialData.email,
      password: "",
      role,
      avatar: initialData.avatar,
    },
  });

  const [files, setFiles] = useState<File[]>([]);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat menyimpan data prajurit. Silakan coba lagi."
  );

  const onSubmit = async (payload: UpdateUserSchemaType) => {
    console.log(payload);

    if (files.length > 0) {
      payload.avatar = await uploadAvatar(files[0], payload.name);
    }

    const result = await updateUser(payload);

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
        message="Data Pengguna telah berhasil disimpan."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Gagal Menyimpan Pengguna!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-2xl shadow-none">
        <Button
          className="top-6 hidden md:inline-flex absolute -left-14"
          variant={"secondary"}
          asChild
        >
          <Link href={"/admin/pengguna/" + role.toLowerCase()}>
            <IconChevronLeft />
          </Link>
        </Button>
        <CardHeader>
          <CardTitle>Input {capitalizeFirstLetter(role)}</CardTitle>
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
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Biarkan kosong jika tidak ingin mengubah
                    </FormDescription>
                  </FormItem>
                )}
              />

              <div className="w-full">
                <Label className="mb-3">Gambar (Opsional)</Label>

                <FileUploadImage
                  multiple={false}
                  initialPreviewUrl={initialData.avatar}
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
                  <Link href={"/admin/pengguna/" + role.toLowerCase()}>
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
