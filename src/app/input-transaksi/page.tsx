import { SearchParams } from "nuqs";
import { InputTransaksiPageClient } from "./client";
import { CashierProductSearchParams } from "./search-params";
import { getProductDataForCashier } from "./queries";
import { getAllCategory } from "../admin/kategori/queries";

export default async function InputTransaksiPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const search = CashierProductSearchParams.parse(searchParams);

  const products = await getProductDataForCashier(search);

  const allCategories = await getAllCategory();

  return (
    <InputTransaksiPageClient
      allCategories={allCategories}
      products={products}
    />
  );
}
