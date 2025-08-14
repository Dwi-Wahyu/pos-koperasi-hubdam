import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchParams } from "nuqs";
import { AdminCategorySearchParams } from "./search-params";
import { getCategoryData } from "./queries";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { TabelCategory } from "./datatable";
import { InputCategoryDialog } from "./input-dialog";

export default async function CategoryPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const search = AdminCategorySearchParams.parse(searchParams);

  const promises = await getCategoryData(search);

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div>
          <CardTitle className="text-center md:text-start text-xl font-bold">
            Kategori
          </CardTitle>
          <CardDescription className="text-center md:text-start text-muted-foreground">
            Halaman ini digunakan untuk mengelola kategori produk yang tersedia
            di koperasi.
          </CardDescription>
        </div>

        <InputCategoryDialog />
      </CardHeader>
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelCategory promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
