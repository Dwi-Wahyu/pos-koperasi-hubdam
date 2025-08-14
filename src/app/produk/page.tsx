import { SearchParams } from "nuqs";
import { LandingTopbar } from "../_components/landing-topbar";
import { CashierProductSearchParams } from "../input-transaksi/search-params";
import { getProductDataForCashier } from "../input-transaksi/queries";
import { getAllCategory } from "../admin/kategori/queries";
import { ProductListPageClient } from "./client";

export default async function ProdukPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const search = CashierProductSearchParams.parse(searchParams);

  const products = await getProductDataForCashier(search);

  const allCategories = await getAllCategory();

  return (
    <div>
      <LandingTopbar />

      <div className="pt-[6.2rem] pb-7 px-5 container mx-auto md:px-0">
        <ProductListPageClient
          allCategories={allCategories}
          products={products}
        />
      </div>
    </div>
  );
}
