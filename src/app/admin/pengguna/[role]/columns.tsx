"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { CircleUser, Eye, SquarePen, Trash } from "lucide-react";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { NotificationDialog } from "@/components/notification-dialog";
import Link from "next/link";
import { UserColumnType } from "./datatable";
import { deleteUser } from "./actions";
import { formatDate } from "@/helper/date-helper";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

export const TabelProdukColumns: ColumnDef<UserColumnType>[] = [
  {
    accessorKey: "avatar",
    header: "Gambar",
    cell: function Cell({ row }) {
      if (row.original.avatar) {
        return (
          <Avatar className="w-28 h-28 rounded-lg">
            <AvatarImage src={adminUrl + row.original.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        );
      }

      return (
        <div className="p-4 w-28 h-28 rounded-lg border flex justify-center items-center">
          <CircleUser className="w-10 h-10" />
        </div>
      );
    },
    size: 5,
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "email",
    header: "Username",
  },
  {
    accessorKey: "last_login",
    header: "Mengakses Aplikasi Pada",
    cell: function Cell({ row }) {
      if (!row.original.last_login) {
        return <div>-</div>;
      }

      return <h1>{formatDate(row.original.last_login)}</h1>;
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: function Cell({ row }) {
      const user = row.original;
      const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [isSuccessDeleteOpen, setIsSuccessDeleteOpen] = useState(false);
      const [isErrorDeleteOpen, setIsErrorDeleteOpen] = useState(false);

      const handleDeleteUser = async () => {
        setIsDeleting(true);

        try {
          const result = await deleteUser(user.id);
          if (result.success) {
            setIsSuccessDeleteOpen(true);
          } else {
            setIsErrorDeleteOpen(true);
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          toast.error("Terjadi kesalahan tak terduga saat menghapus pengguna.");
        } finally {
          setIsDeleting(false);
          setIsConfirmDialogOpen(false);
        }
      };

      return (
        <>
          <div className="flex gap-2 items-center">
            <Button size={"icon"} variant={"default"} asChild>
              <Link href={"/admin/pengguna/" + user.id}>
                <Eye />
              </Link>
            </Button>

            <Button size={"icon"} variant={"secondary"} asChild>
              <Link
                href={`/admin/pengguna/${user.role.toLowerCase()}/edit/${
                  user.id
                }`}
              >
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
            message="Pengguna berhasil dihapus."
            variant="success"
          />

          <NotificationDialog
            isOpen={isErrorDeleteOpen}
            onClose={() => setIsErrorDeleteOpen(false)}
            title="Gagal menghapus pengguna"
            message={"Terjadi kesalahan yang tidak diketahui"}
            variant="error"
          />

          <ConfirmationDialog
            isOpen={isConfirmDialogOpen}
            onClose={() => setIsConfirmDialogOpen(false)}
            onConfirm={handleDeleteUser}
            title="Konfirmasi Penghapusan"
            message={`Apakah Anda yakin ingin menghapus Pengguna "${user.name}"?`}
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
