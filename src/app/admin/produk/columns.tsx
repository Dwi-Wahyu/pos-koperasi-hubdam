"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { PackageOpen, SquarePen, Trash } from "lucide-react";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { NotificationDialog } from "@/components/notification-dialog";
import Link from "next/link";
import { ProductColumnType } from "./datatable";
import { deleteProduct } from "./actions";
import { Badge } from "@/components/ui/badge";
import { IconStar } from "@tabler/icons-react";

export const TabelProdukColumns: ColumnDef<ProductColumnType>[] = [
  {
    accessorKey: "name",
    header: "Nama Produk",
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: function Cell({ row }) {
      return row.original.sku ?? "-";
    },
  },
  {
    accessorKey: "categories",
    header: "Kategori",
    cell: function Cell({ cell, row }) {
      return (
        <div className="flex gap-2">
          {row.original.categories.map((category) => (
            <Badge variant={"outline"} key={category.id}>
              {category.name}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "total_rating",
    header: "Rating",
    cell: function Cell({ row }) {
      return (
        <div className="flex items-center gap-2">
          <IconStar size={17} />
          {row.original.rating_count !== 0
            ? row.original.total_rating / row.original.rating_count
            : 0}{" "}
        </div>
      );
    },
  },
  {
    accessorKey: "inventory_id",
    header: "Gudang",
    cell: function Cell({ row }) {
      return row.original.inventory?.name ?? "-";
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: function Cell({ row }) {
      const Produk = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [isSuccessDeleteOpen, setIsSuccessDeleteOpen] = useState(false);
      const [isErrorDeleteOpen, setIsErrorDeleteOpen] = useState(false);

      const handleDeleteProduct = async () => {
        setIsDeleting(true);

        try {
          const result = await deleteProduct(Produk.id);
          if (result.success) {
            setIsSuccessDeleteOpen(true);
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
        <>
          <div className="flex gap-2 items-center">
            <Button size={"icon"} variant={"default"} asChild>
              <Link href={"/admin/produk/" + Produk.id}>
                <PackageOpen />
              </Link>
            </Button>

            <Button size={"icon"} variant={"secondary"} asChild>
              <Link href={"/admin/produk/edit/" + Produk.id}>
                <SquarePen />
              </Link>
            </Button>

            <Button
              size={"icon"}
              variant={"destructive"}
              onClick={() => setIsConfirmDialogOpen(true)}
            >
              <Trash />
            </Button>
          </div>

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
            message={`Apakah Anda yakin ingin menghapus Produk "${Produk.name}"? Tindakan ini tidak dapat dibatalkan.`}
            confirmButtonText={isDeleting ? "Menghapus..." : "Hapus"}
            cancelButtonText="Batal"
            isLoading={isDeleting}
          />
        </>
      );
    },
    size: 5,
  },
];
