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
import { HousePlus, PenSquare, Tag } from "lucide-react";
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
  UpdateProductVariantSchema,
  UpdateProductVariantSchemaType,
} from "./schema";
import { createProductVariant, updateProductVariant } from "./actions";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function EditProductVariantDialog({
  variant_name,
  variant_id,
}: {
  variant_name: string;
  variant_id: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useForm<UpdateProductVariantSchemaType>({
    resolver: zodResolver(UpdateProductVariantSchema),
    defaultValues: {
      id: variant_id,
      name: variant_name,
    },
  });

  const onSubmit = async (data: UpdateProductVariantSchemaType) => {
    setLoading(true);

    const action = await updateProductVariant(data);

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

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" onClick={() => setIsOpen(true)} size={"icon"}>
            <PenSquare />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Edit Varian</p>
        </TooltipContent>
      </Tooltip>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>Edit Varian</DialogTitle>
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
