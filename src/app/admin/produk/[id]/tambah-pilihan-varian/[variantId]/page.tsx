import NotFoundResource from "@/app/_components/not-found-resource";
import { TambahPilihanVarianProdukForm } from "./form";
import { getProductVariantById } from "../../queries";

export default async function TambahPilihanVarianProdukPage({
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

  const data = await getProductVariantById(parseInt(variantId));

  if (!data) {
    return <NotFoundResource title="Varian Produk Tidak Ditemukan" />;
  }

  return <TambahPilihanVarianProdukForm variantData={data} />;
}
