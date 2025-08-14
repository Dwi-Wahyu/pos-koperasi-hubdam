import { getAllCategoryIncludingProducts } from "@/app/admin/produk/queries";
import { ProductCard } from "../product-card";

type ProductTypeFromCategory = Awaited<
  ReturnType<typeof getAllCategoryIncludingProducts>
>[number]["product"];

export function ProductsDiv({
  products,
}: {
  products: ProductTypeFromCategory;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
