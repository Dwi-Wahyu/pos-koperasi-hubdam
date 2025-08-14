"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconLoader } from "@tabler/icons-react";
import { deleteGudang } from "./actions";
import { NotificationDialog } from "@/components/notification-dialog";

export function DeleteGudangDialog({ id }: { id: number }) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  async function handleDeleteGudang() {
    setIsLoading(true);

    try {
      await deleteGudang(id);

      setIsLoading(false);
      setIsConfirmDialogOpen(false);
      setIsSuccessOpen(true);
    } catch (error) {
      setIsLoading(false);
      setIsConfirmDialogOpen(false);
      setIsErrorOpen(true);
    }
  }

  return (
    <>
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Gudang berhasil dihapus."
        variant="success"
      />

      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menghapus gudang. Silakan coba lagi."
        variant="error"
      />

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground border-border">
          <DialogHeader className="flex flex-col items-center text-center">
            <AlertCircle className="h-8 w-8 text-secondary" />{" "}
            {/* Ikon peringatan */}
            <DialogTitle className="text-xl font-bold mt-2">
              Anda Yakin Menghapus Gudang?
            </DialogTitle>
            <DialogDescription className="text-base text-center"></DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-2">
            {" "}
            <Button
              variant="outline"
              onClick={() => setIsConfirmDialogOpen(false)}
              className="w-full sm:w-auto rounded-full bg-card-foreground text-card hover:text-background hover:bg-card-foreground/90"
            >
              Batal
            </Button>
            <Button
              onClick={handleDeleteGudang}
              disabled={isLoading}
              variant={"destructive"}
              className="w-full sm:w-auto rounded-full mb-2 sm:mb-0"
            >
              {isLoading ? (
                <IconLoader className="animate-spin" />
              ) : (
                "Ya, Hapus"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
