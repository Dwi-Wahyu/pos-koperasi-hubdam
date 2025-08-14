import NotFoundResource from "@/app/_components/not-found-resource";
import { UpdateProdukForm } from "./form";
import { getProductById } from "../../queries";
import { getAllGudang } from "@/app/admin/gudang/queries";
import { getAllCategory } from "@/app/admin/kategori/queries";

export default async function TambahProdukPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (isNaN(parseInt(id))) {
    return <NotFoundResource title="Produk Tidak Ditemukan" />;
  }

  const productId = parseInt(id);

  const initialData = await getProductById(productId);

  if (!initialData) {
    return <NotFoundResource title="Produk Tidak Ditemukan" />;
  }

  const allCategories = await getAllCategory();
  const allGudang = await getAllGudang();

  return (
    <UpdateProdukForm
      initialData={initialData}
      allCategories={allCategories}
      allGudang={allGudang}
    />
  );
}
