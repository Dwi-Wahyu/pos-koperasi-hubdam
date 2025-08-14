import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, PackagePlus } from "lucide-react";
import Link from "next/link";
import { SearchParams } from "nuqs";
import { AdminProductGudangSearchParams } from "./search-params";
import { getProductDataInGudang } from "./queries";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { TabelProduct } from "./datatable";
import NotFoundResource from "@/app/_components/not-found-resource";
import { prisma } from "@/lib/prisma";
import { BackButton } from "@/components/back-button";

export default async function GudangPage(props: {
  searchParams: Promise<SearchParams>;
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  if (isNaN(parseInt(id))) {
    return <NotFoundResource title="Gudang Tidak Ditemukan" />;
  }

  const inventory_id = parseInt(id);

  const dataGudang = await prisma.inventory.findFirst({
    where: {
      id: inventory_id,
    },
  });

  if (!dataGudang) {
    return <NotFoundResource title="Gudang Tidak Ditemukan" />;
  }

  const searchParams = await props.searchParams;
  const search = AdminProductGudangSearchParams.parse(searchParams);

  const promises = await getProductDataInGudang(search, inventory_id);

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div>
          <CardTitle className="text-center md:text-start text-xl font-bold">
            Manajemen Stok
          </CardTitle>
          <CardDescription className="text-center md:text-start text-muted-foreground">
            {dataGudang.name}
          </CardDescription>
        </div>

        <Button asChild variant="outline">
          <Link href={"/admin/produk/tambah"}>
            <PackagePlus />
            Tambah Produk
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelProduct promises={promises} />
        </Suspense>

        <div className="mt-2">
          <BackButton />
        </div>
      </CardContent>
    </Card>
  );
}
