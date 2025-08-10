"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Loader2 } from "lucide-react";
import { cekPasswordBenar, updatePassword } from "./action";
import {
  updatePasswordSchema,
  UpdatePasswordSchemaType,
} from "@/validations/schemas/update-password";
import { NotificationDialog } from "@/components/notification-dialog";
import { PasswordInput } from "@/components/password-input";
import { toast } from "sonner";

export default function GantiPasswordDrawer({ id }: { id: string }) {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      id,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: UpdatePasswordSchemaType) {
    setLoading(true);
    try {
      const passwordBenar = await cekPasswordBenar(
        values.id,
        values.oldPassword
      );

      console.log(passwordBenar);

      if (!passwordBenar) {
        form.setError("oldPassword", {
          message: "Password tidak valid.",
        });
        return;
      }

      const actions = await updatePassword(values);

      if (actions.success) {
        setOpen(false);
        setIsSuccessOpen(true);
        toast.success(
          "Update password baru Anda telah berhasil dilakukan. Keamanan akun terjaga."
        );
        form.reset();
      }
    } catch (error) {
      setIsErrorOpen(true);
      toast.success(
        "Update password baru anda telah gagal. terjadi kesalahan yang tidak diketahui"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Lama</FormLabel>
              <FormControl>
                <PasswordInput
                  type="password"
                  placeholder="Masukkan password lama"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Baru</FormLabel>
              <FormControl>
                <PasswordInput
                  type="password"
                  placeholder="Masukkan password baru"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password Baru</FormLabel>
              <FormControl>
                <PasswordInput
                  type="password"
                  placeholder="Konfirmasi password baru"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Simpan Perubahan
        </Button>
      </form>
    </Form>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"sm"}>
            <Key />
            Ubah Password
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ganti Password</DialogTitle>
            <DialogDescription>
              Untuk keamanan akun Anda, pastikan password baru kuat dan berbeda
              dari password sebelumnya
            </DialogDescription>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      {/* Dialog Sukses */}
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Autentikasi Diperbarui"
        message="Verifikasi password baru Anda telah berhasil dilakukan. Keamanan akun terjaga."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Gagal mengubah password"
        variant="error"
      />

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size={"sm"}>
            <Key />
            Ubah Password
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Ganti Password</DrawerTitle>
            <DrawerDescription>
              Untuk keamanan akun Anda, pastikan password baru kuat dan berbeda
              dari password sebelumnya
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4">{formContent}</div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Batal</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
