import NotFoundResource from "@/app/_components/not-found-resource";
import { DetailProdukPageClient } from "./client";
import { getProductById } from "@/app/admin/produk/queries";
import { LandingTopbar } from "@/app/_components/landing-topbar";

export default async function DetailProdukPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (isNaN(parseInt(id))) {
    return <NotFoundResource title="Produk tidak ditemukan" />;
  }

  const product = await getProductById(parseInt(id));

  if (!product) {
    return <NotFoundResource title="Produk tidak ditemukan" />;
  }

  return (
    <div>
      <LandingTopbar />

      <div className="pt-[6.2rem] pb-7 px-5 container mx-auto md:px-0">
        <DetailProdukPageClient product={product} />
      </div>
    </div>
  );
}
