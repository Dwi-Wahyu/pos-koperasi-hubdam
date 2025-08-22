"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconLoader, IconPlus } from "@tabler/icons-react";
import { FileUploadImage } from "@/app/_components/file-upload-image";
import { Label } from "@/components/ui/label";
import { NotificationDialog } from "@/components/notification-dialog";
import { useState } from "react";
import { InputShopSchema, InputShopType } from "../../schema";
import { createShop, uploadImage } from "../../actions";

export function PendaftaranKoperasiForm({ userId }: { userId: string }) {
  const form = useForm<InputShopType>({
    resolver: yupResolver(InputShopSchema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
      phone_number: "",
      email: "",
      tax_id: "",
      status: "PENDING",
      owner_id: userId,
    },
  });

  const [logoFile, setLogoFile] = useState<File[]>([]);
  const [bannerFile, setBannerFile] = useState<File[]>([]);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Terjadi kesalahan saat mendaftar koperasi. Silakan coba lagi."
  );

  const onSubmit = async (payload: InputShopType) => {
    try {
      if (logoFile.length > 0) {
        payload["logo"] = await uploadImage(
          logoFile[0],
          payload.name,
          "koperasi"
        );
      }

      if (bannerFile.length > 0) {
        payload["banner"] = await uploadImage(
          bannerFile[0],
          payload.name,
          "koperasi"
        );
      }

      const result = await createShop(payload);

      if (result.success) {
        setIsSuccessOpen(true);
        form.reset();
        setLogoFile([]);
        setBannerFile([]);
      } else {
        setErrorMessage(result.error.message);
        setIsErrorOpen(true);
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan teknis. Silakan coba lagi.");
      setIsErrorOpen(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Pengajuan Berhasil!"
        message="Pengajuan pendaftaran koperasi Anda berhasil terkirim. Tim kami akan segera meninjau data Anda."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Pengajuan Gagal!"
        message={errorMessage}
        variant="error"
      />

      <Card className="w-full relative max-w-2xl shadow-none mb-7">
        <CardHeader>
          <CardTitle>Pengajuan Pendaftaran Koperasi</CardTitle>
          <CardDescription>
            Lengkapi data di bawah ini untuk mendaftarkan koperasi Anda.
          </CardDescription>
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
                    <FormLabel>Nama Koperasi</FormLabel>
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
                    <FormLabel>Email Koperasi</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Lengkap</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tax_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NPWP Koperasi (Opsional)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />

                    <FormDescription>
                      Nomor Pajak Anda Akan Dienkripsi
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi Koperasi (Opsional)</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full space-y-4">
                <div>
                  <Label className="mb-2">Logo Koperasi (Opsional)</Label>
                  <FileUploadImage
                    multiple={false}
                    onFilesChange={(newFiles) => {
                      setLogoFile(newFiles);
                    }}
                  />
                </div>

                <div>
                  <Label className="mb-2">Banner Toko (Opsional)</Label>
                  <FileUploadImage
                    multiple={false}
                    onFilesChange={(newFiles) => {
                      setBannerFile(newFiles);
                    }}
                  />
                  <FormDescription className="mt-1">
                    Pilih gambar dengan aspek rasio 9:16
                  </FormDescription>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <IconLoader className="animate-spin" />
                      Loading . . .
                    </>
                  ) : (
                    <>
                      <IconPlus />
                      Ajukan
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
