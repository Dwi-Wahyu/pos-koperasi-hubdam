"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductById } from "../queries";
import {
  ChevronLeft,
  ImageOff,
  Package,
  PenSquare,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { InputProductVariantDialog } from "./input-dialog";
import { ProductVariantList } from "./variant-list";
import { deleteProduct } from "../actions";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "nextjs-toploader/app";
import { NotificationDialog } from "@/components/notification-dialog";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { BackButton } from "@/components/back-button";

export default function DetailProductPageClient({
  data,
}: {
  data: NonNullable<Awaited<ReturnType<typeof getProductById>>>;
}) {
  const router = useRouter();

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSuccessDeleteOpen, setIsSuccessDeleteOpen] = useState(false);
  const [isErrorDeleteOpen, setIsErrorDeleteOpen] = useState(false);

  const handleDeleteProduct = async () => {
    setIsDeleting(true);

    try {
      const result = await deleteProduct(data.id);
      if (result.success) {
        setIsSuccessDeleteOpen(true);
        setTimeout(() => {
          router.push("/admin/produk");
        }, 3000);
      } else {
        setIsErrorDeleteOpen(true);
      }
    } catch (error) {
      console.error("Error deleting Produk:", error);
      toast.error("Terjadi kesalahan tak terduga saat menghapus Produk.");
    } finally {
      setIsDeleting(false);
      setIsConfirmDialogOpen(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex-col">
      <NotificationDialog
        isOpen={isSuccessDeleteOpen}
        onClose={() => setIsSuccessDeleteOpen(false)}
        title="Aksi Berhasil!"
        message="Produk berhasil dihapus."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorDeleteOpen}
        onClose={() => setIsErrorDeleteOpen(false)}
        title="Gagal menghapus Produk"
        message={"Terjadi kesalahan yang tidak diketahui"}
        variant="error"
      />

      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={handleDeleteProduct}
        title="Konfirmasi Penghapusan"
        message={`Apakah Anda yakin ingin menghapus Produk "${data.name}"?`}
        confirmButtonText={isDeleting ? "Menghapus..." : "Hapus"}
        cancelButtonText="Batal"
        isLoading={isDeleting}
      />

      <Card className="mb-5">
        <CardHeader>
          {data.image ? (
            <div className="flex justify-center">
              <Image
                src={data.image}
                alt={data.name}
                width={300}
                height={300}
              />
            </div>
          ) : (
            <div className="container">
              <div className="bg-background mx-auto border flex-col gap-3 p-5 rounded-lg max-w-lg flex items-center justify-center">
                <ImageOff className="text-muted-foreground w-10 h-10 md:w-20 md:h-20" />
                <h1 className="text-muted-foreground">Belum Ada Gambar</h1>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="flex-col flex gap-3">
          <Label className="text-xl">
            <Package />
            Detail Produk
          </Label>
          <div className="border-b pb-3">
            <Label className="mb-1">Nama</Label>
            <h1>{data.name}</h1>
          </div>
          <div className="border-b pb-3">
            <Label className="mb-1">Kategori</Label>
            {data.categories.map((category) => (
              <Badge variant={"outline"} key={category.id}>
                {category.name}
              </Badge>
            ))}
          </div>
          <div className="border-b pb-3">
            <Label className="mb-1">Gudang</Label>
            <h1>{data.inventory?.name}</h1>
          </div>

          {data.is_single_variant && (
            <div className="border-b pb-3">
              <Label className="mb-1">Satuan Unit Produk</Label>
              <h1>{data.unit}</h1>
            </div>
          )}

          {data.is_single_variant && (
            <div className="border-b pb-3">
              <Label className="mb-1">Harga Modal Per Unit</Label>
              <h1>{data.cost}</h1>
            </div>
          )}

          {data.is_single_variant && (
            <div className="border-b pb-3">
              <Label className="mb-1">Harga Jual Per Unit</Label>
              <h1>{data.price}</h1>
            </div>
          )}

          <div className="border-b pb-3">
            <Label className="mb-1">Dibuat Pada</Label>
            <h1>{formatDate(data.created_at)}</h1>
          </div>
          <div className="border-b pb-3">
            <Label className="mb-1">Terakhir Diperbarui Pada</Label>
            <h1>{formatDate(data.updated_at)}</h1>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center flex-wrap md:justify-end gap-3">
          <BackButton />

          <Button
            variant={"destructive"}
            onClick={() => setIsConfirmDialogOpen(true)}
          >
            <Trash2 />
            Hapus
          </Button>

          <Button asChild variant="secondary">
            <Link href={"/admin/produk/edit/" + data.id}>
              <PenSquare />
              Edit
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {!data.is_single_variant && <ProductVariantList data={data} />}
    </div>
  );
}
