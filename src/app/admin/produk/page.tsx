import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PackagePlus } from "lucide-react";
import Link from "next/link";
import { SearchParams } from "nuqs";
import { AdminProductSearchParams } from "./search-params";
import { getProductData } from "./queries";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { TabelProduct } from "./datatable";

export default async function ProductPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const search = AdminProductSearchParams.parse(searchParams);

  const promises = await getProductData(search);

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div>
          <CardTitle className="text-center md:text-start text-xl font-bold">
            Manajemen Produk
          </CardTitle>
          <CardDescription className="text-center md:text-start text-muted-foreground">
            Mengelola data produk koperasi secara mudah, teratur, dan efisien.
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
      </CardContent>
    </Card>
  );
}
