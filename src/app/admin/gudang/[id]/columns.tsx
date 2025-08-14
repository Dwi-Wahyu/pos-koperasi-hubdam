"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ChartCandlestick, PackageOpen, SquarePen, Trash } from "lucide-react";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { NotificationDialog } from "@/components/notification-dialog";
import Link from "next/link";
import { ProductColumnType } from "./datatable";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TabelProdukColumns: ColumnDef<ProductColumnType>[] = [
  {
    accessorKey: "name",
    header: "Nama Produk",
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
    header: "Hanya Satu Varian",
    cell: function Cell({ row }) {
      return row.original.is_single_variant ? "Ya" : "Tidak";
    },
  },
  {
    header: "Stok",
    cell: function Cell({ row }) {
      return row.original.stock + " " + row.original.unit;
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

      return (
        <>
          <div className="flex gap-2 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon"} variant={"outline"} asChild>
                  <Link href={"/admin/produk/" + Produk.id}>
                    <PackageOpen />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Detail Produk</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon"} variant={"outline"} asChild>
                  <Link href={"/admin/produk/edit/" + Produk.id}>
                    <ChartCandlestick />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Edit Stok</p>
              </TooltipContent>
            </Tooltip>
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
            onConfirm={() => setIsConfirmDialogOpen(false)}
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
