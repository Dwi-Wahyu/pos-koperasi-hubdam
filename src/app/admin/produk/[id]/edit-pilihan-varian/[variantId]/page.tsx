import NotFoundResource from "@/app/_components/not-found-resource";

import {
  getProductVariantById,
  getProductVariantOptionById,
} from "../../queries";
import { UpdatePilihanVarianProdukForm } from "./form";

export default async function UpdatePilihanVarianProdukPage({
  params,
}: {
  params: Promise<{ id: string; variantId: string }>;
}) {
  const { id: productId, variantId } = await params;

  if (isNaN(parseInt(productId))) {
    return <NotFoundResource title="Produk Tidak Ditemukan" />;
  }

  if (isNaN(parseInt(variantId))) {
    return <NotFoundResource title="Varian Produk Tidak Ditemukan" />;
  }

  const variantData = await getProductVariantById(parseInt(variantId));

  if (!variantData) {
    return <NotFoundResource title="Varian Produk Tidak Ditemukan" />;
  }

  const initialData = await getProductVariantOptionById(parseInt(variantId));

  if (!initialData) {
    return <NotFoundResource title="Pilihan Varian Produk Tidak Ditemukan" />;
  }

  return (
    <UpdatePilihanVarianProdukForm
      variantData={variantData}
      initialData={initialData}
    />
  );
}
