import NotFoundResource from "@/app/_components/not-found-resource";
import { getProductById } from "../queries";
import DetailProductPageClient from "./client";

export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (isNaN(parseInt(id))) {
    return <NotFoundResource title="Produk Tidak Ditemukan" />;
  }

  const productId = parseInt(id);

  const data = await getProductById(productId);

  if (!data) {
    return <NotFoundResource title="Produk Tidak Ditemukan" />;
  }

  return (
    <div className="container">
      <DetailProductPageClient data={data} />
    </div>
  );
}
