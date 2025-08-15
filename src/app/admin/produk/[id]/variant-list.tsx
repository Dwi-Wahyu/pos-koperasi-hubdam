"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getProductById } from "../queries";
import {
  ImageIcon,
  ImageOff,
  ImagePlusIcon,
  ImageUpIcon,
  PenSquare,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { InputProductVariantDialog } from "./input-dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EditProductVariantDialog } from "./edit-dialog";
import { useState } from "react";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { NotificationDialog } from "@/components/notification-dialog";
import { toast } from "sonner";
import { deleteVariant, deleteVariantOption } from "./actions";

export function ProductVariantList({
  data,
}: {
  data: NonNullable<Awaited<ReturnType<typeof getProductById>>>;
}) {
  const [isDeleteVarianDialogOpen, setIsDeleteVarianDialogOpen] =
    useState(false);
  const [isDeleteOptionDialogOpen, setIsDeleteOptionDialogOpen] =
    useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [optionId, setOptionId] = useState<number | null>(null);

  async function handleDeleteVarian() {
    setIsDeleting(true);

    try {
      const result = await deleteVariant(data.id);
      if (result.success) {
        setIsDeleteVarianDialogOpen(false);
        toast.success("Berhasil menghapus varian produk.");
      } else {
        setIsErrorOpen(true);
      }
    } catch (error) {
      console.error("Error deleting Produk:", error);
      toast.error("Terjadi kesalahan tak terduga saat menghapus Produk.");
    } finally {
      setIsDeleting(false);
      setIsDeleteVarianDialogOpen(false);
    }
  }

  async function handleDeleteOption() {
    setIsDeleting(true);

    try {
      const result = await deleteVariantOption(data.id);
      if (result.success) {
        setIsDeleteOptionDialogOpen(false);
        toast.success("Berhasil menghapus pilihan varian.");
      } else {
        setIsErrorOpen(true);
      }
    } catch (error) {
      console.error("Error deleting Produk:", error);
      toast.error("Terjadi kesalahan tak terduga saat menghapus Produk.");
    } finally {
      setOptionId(null);
      setIsDeleting(false);
      setIsDeleteOptionDialogOpen(false);
    }
  }

  return (
    <Card>
      <ConfirmationDialog
        isOpen={isDeleteVarianDialogOpen}
        onClose={() => setIsDeleteVarianDialogOpen(false)}
        onConfirm={handleDeleteVarian}
        title="Konfirmasi Penghapusan"
        message="Apakah Anda yakin ingin menghapus varian ini? Seluruh pilihan varian akan ikut terhapus."
        confirmButtonText="Ya, Hapus"
        cancelButtonText="Tidak"
        isLoading={isDeleting}
      />

      <ConfirmationDialog
        isOpen={isDeleteOptionDialogOpen}
        onClose={() => {
          setOptionId(null);
          setIsDeleteOptionDialogOpen(false);
        }}
        onConfirm={handleDeleteOption}
        title="Konfirmasi Penghapusan"
        message="Apakah Anda yakin ingin menghapus pilihan varian ini?"
        confirmButtonText="Ya, Hapus"
        cancelButtonText="Tidak"
        isLoading={isDeleting}
      />

      <CardHeader className="flex justify-between items-center">
        <Label className="text-xl">
          <Tag />
          Varian Produk
        </Label>
        <InputProductVariantDialog product_id={data.id} />
      </CardHeader>
      <CardContent>
        {data.variants.length ? (
          <div>
            {data.variants.map((variant, variantIdx) => (
              <div key={variantIdx} className="border-b first:border-t">
                <div className="mb-2 mt-3 justify-between flex gap-2 items-center">
                  <h1 className="text-secondary">{variant.name}</h1>
                  <div className="flex gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild variant="ghost" size={"icon"}>
                          <Link
                            href={`/admin/produk/${data.id}/tambah-pilihan-varian/${variant.id}`}
                          >
                            <Plus />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Tambah Pilihan</p>
                      </TooltipContent>
                    </Tooltip>

                    <EditProductVariantDialog
                      variant_id={variant.id}
                      variant_name={variant.name}
                    />

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => setIsDeleteVarianDialogOpen(true)}
                          variant="ghost"
                          size={"icon"}
                        >
                          <Trash2 />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Hapus Varian</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                {variant.options.length ? (
                  <div className="grid grid-cols-1">
                    {variant.options.map((option, optionIdx) => (
                      <div
                        key={optionIdx}
                        className="p-3 rounded-lg mb-4 bg-background border "
                      >
                        <div className="flex mb-3 gap-2 items-center">
                          <div>
                            <h1 className="">{option.option_value}</h1>
                            <h1 className="text-sm text-muted-foreground">
                              {option.sku}
                            </h1>
                          </div>
                        </div>

                        {option.image ? (
                          <div className="flex justify-center">
                            <Image
                              src={option.image}
                              alt={option.option_value}
                              width={300}
                              height={300}
                            />
                          </div>
                        ) : (
                          <div className="container">
                            <div className="bg-background mx-auto flex-col gap-3 p-5 max-w-lg flex items-center justify-center">
                              <ImageOff className="text-muted-foreground w-10 h-10 md:w-20 md:h-20" />
                              <h1 className="text-muted-foreground">
                                Belum Ada Gambar
                              </h1>
                            </div>
                          </div>
                        )}

                        <div className="flex mt-3 justify-end">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button asChild variant="ghost" size={"icon"}>
                                <Link
                                  href={`/admin/produk/${data.id}/edit-pilihan-varian/${variant.id}`}
                                >
                                  <PenSquare />
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p>Edit Pilihan</p>
                            </TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                onClick={() => {
                                  setOptionId(option.id);
                                  setIsDeleteOptionDialogOpen(true);
                                }}
                                variant="ghost"
                                size={"icon"}
                              >
                                <Trash2 />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p>Hapus Varian</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h1 className="text-center mb-3 text-muted-foreground">
                    Belum Ada Pilihan Varian
                  </h1>
                )}
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-muted-foreground text-center italic">
            Belum Ada Varian
          </h1>
        )}
      </CardContent>
    </Card>
  );
}
