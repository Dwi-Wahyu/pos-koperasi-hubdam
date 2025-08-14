import { getAllGudang } from "../../gudang/queries";
import { getAllCategory } from "../../kategori/queries";
import { TambahProdukForm } from "./form";

export default async function TambahProdukPage() {
  const allCategories = await getAllCategory();
  const allGudang = await getAllGudang();

  return (
    <TambahProdukForm allCategories={allCategories} allGudang={allGudang} />
  );
}
