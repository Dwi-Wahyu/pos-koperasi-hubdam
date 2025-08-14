"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash } from "lucide-react";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { NotificationDialog } from "@/components/notification-dialog";
import Link from "next/link";
import { CategoryColumnType } from "./datatable";
import { deleteCategory } from "./actions";

export const TabelProdukColumns: ColumnDef<CategoryColumnType>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "product",
    header: "Jumlah Produk",
    cell: function Cell({ row }) {
      return <div>{row.original.product.length}</div>;
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: function Cell({ row }) {
      const category = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [isSuccessDeleteOpen, setIsSuccessDeleteOpen] = useState(false);
      const [isErrorDeleteOpen, setIsErrorDeleteOpen] = useState(false);

      const handleDeleteCategory = async () => {
        setIsDeleting(true);

        try {
          const result = await deleteCategory(category.id);
          if (result.success) {
            setIsSuccessDeleteOpen(true);
          } else {
            setIsErrorDeleteOpen(true);
          }
        } catch (error) {
          console.error("Error deleting category:", error);
          toast.error("Terjadi kesalahan tak terduga saat menghapus kategori.");
        } finally {
          setIsDeleting(false);
          setIsConfirmDialogOpen(false);
        }
      };

      return (
        <>
          <div className="flex gap-2 items-center">
            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"/admin/produk/edit/" + category.id}>
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
            onConfirm={handleDeleteCategory}
            title="Konfirmasi Penghapusan"
            message={`Apakah Anda yakin ingin kategori "${category.name}"? Tindakan ini tidak dapat dibatalkan.`}
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
