"use client";

import { NotificationDialog } from "@/components/notification-dialog";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HousePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputGudangSchema, InputGudangSchemaType } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createGudang } from "./actions";

export function InputGudangDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useForm<InputGudangSchemaType>({
    resolver: zodResolver(InputGudangSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: InputGudangSchemaType) => {
    setLoading(true);

    const action = await createGudang(data);

    if (action.success) {
      setIsOpen(false);
      setIsSuccessOpen(true);
    }

    setLoading(false);
  };

  return (
    <div>
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data berhasil disimpan."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan data. Silakan coba lagi."
        variant="error"
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="btn btn-primary">
          <Button variant="outline">
            <HousePlus />
            Tambah Gudang
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>Tambah Gudang</DialogTitle>
            <DialogDescription>Masukkan Nama Gudang</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Contoh: Gudang Kasipernika"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex mt-6 justify-end gap-2">
                <Button
                  onClick={() => setIsOpen(false)}
                  variant={"outline"}
                  type="button"
                >
                  Batal
                </Button>
                <Button type="submit" className="" disabled={loading}>
                  {form.formState.isSubmitting ? "Loading..." : "Simpan"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
