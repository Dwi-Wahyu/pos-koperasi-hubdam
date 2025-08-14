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
import {
  InputProductVariantSchema,
  InputProductVariantSchemaType,
} from "./schema";
import { createProductVariant } from "./actions";

export function InputProductVariantDialog({
  product_id,
}: {
  product_id: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useForm<InputProductVariantSchemaType>({
    resolver: zodResolver(InputProductVariantSchema),
    defaultValues: {
      product_id,
      name: "",
    },
  });

  const onSubmit = async (data: InputProductVariantSchemaType) => {
    setLoading(true);

    const action = await createProductVariant(data);

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
        message="Varian Produk telah berhasil disimpan."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan varian produk. Silakan coba lagi."
        variant="error"
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="btn btn-primary">
          <Button>Tambah Varian</Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>Tambah Varian</DialogTitle>
            <DialogDescription>Masukkan Nama Varian</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Contoh: Ukuran" {...field} />
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
