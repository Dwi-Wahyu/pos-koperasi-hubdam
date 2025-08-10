"use client";

import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { FormDialog } from "@/components/form-dialog";
import { NotificationDialog } from "@/components/notification-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function DialogDemo() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const handleFormSubmit = (data: { name: string }) => {
    console.log("Data form disubmit:", data);
    setIsFormDialogOpen(false);
  };

  return (
    <div>
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Aksi Berhasil!"
        message="Data Anda telah berhasil disimpan."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat menyimpan data. Silakan coba lagi."
        variant="error"
      />

      {/* Dialog Info */}
      <NotificationDialog
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Informasi Penting"
        message="Ini adalah pesan informasi umum."
        variant="info"
      />

      <ConfirmationDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={() => setIsConfirmDialogOpen(false)}
        title="Simpan Perubahan"
        message="Apakah Anda yakin ingin menghapus item ini? Tindakan ini tidak dapat dibatalkan."
        confirmButtonText="Simpan"
        cancelButtonText="Tidak"
      />

      <div className="space-x-4 mb-8">
        <Button onClick={() => setIsSuccessOpen(true)}>Tampilkan Sukses</Button>
        <Button onClick={() => setIsErrorOpen(true)} variant="destructive">
          Tampilkan Gagal
        </Button>
        <Button onClick={() => setIsInfoOpen(true)} variant="outline">
          Tampilkan Info
        </Button>

        <Button
          onClick={() => setIsConfirmDialogOpen(true)}
          variant="destructive"
        >
          Hapus Item
        </Button>

        <Button onClick={() => setIsFormDialogOpen(true)}>Buka Form</Button>

        <FormDialog
          isOpen={isFormDialogOpen}
          onClose={() => setIsFormDialogOpen(false)}
          title="Edit Profil Pengguna"
          description="Buat perubahan pada profil Anda di sini. Klik simpan saat Anda selesai."
        >
          <MyCustomForm onSubmit={handleFormSubmit} />
        </FormDialog>
      </div>
    </div>
  );
}

function MyCustomForm({
  onSubmit,
}: {
  onSubmit: (data: { name: string }) => void;
}) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Nama
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-3"
        />
      </div>
      {/* Tombol submit ada di dalam form ini */}
      <Button
        type="submit"
        className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
      >
        Simpan Perubahan
      </Button>
    </form>
  );
}
