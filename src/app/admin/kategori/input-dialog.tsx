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
import { HousePlus, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createCategory } from "./actions";
import { InputCategorySchema, InputCategorySchemaType } from "./schema";

export function InputCategoryDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useForm<InputCategorySchemaType>({
    resolver: zodResolver(InputCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: InputCategorySchemaType) => {
    setLoading(true);

    const action = await createCategory(data);

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
        message="Kategori telah berhasil disimpan."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan kategori. Silakan coba lagi."
        variant="error"
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="btn btn-primary">
          <Button variant="outline">
            <Tag />
            Tambah Kategori
          </Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>Tambah Kategori</DialogTitle>
            <DialogDescription>Masukkan Nama Kategori</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Contoh: Alat Jaringan" {...field} />
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
