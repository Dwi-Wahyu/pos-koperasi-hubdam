import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PackagePlus, UserPlus } from "lucide-react";
import Link from "next/link";
import { SearchParams } from "nuqs";
import { Suspense } from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { getUserData } from "./queries";
import { UserSearchParams } from "./search-params";
import NotFoundResource from "@/app/_components/not-found-resource";
import { TabelUser } from "./datatable";

export default async function PenggunaPage(props: {
  searchParams: Promise<SearchParams>;
  params: Promise<{ role: string }>;
}) {
  const { role } = await props.params;

  if (!validRoles.includes(role)) {
    return <NotFoundResource title="Role Pengguna Tidak Ditemukan" />;
  }

  const searchParams = await props.searchParams;
  const search = UserSearchParams.parse(searchParams);

  const uppercaseRole = role.toUpperCase();

  const updatedSearch = {
    ...search,
    role: uppercaseRole as "ADMIN" | "CUSTOMER" | "CASHIER",
  };

  const promises = await getUserData(updatedSearch);

  const content = penggunaContentMapping.filter((temp) => temp.path === role);

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div>
          <CardTitle className="text-center md:text-start text-xl font-bold">
            Manajemen {content[0].title}
          </CardTitle>
          <CardDescription className="text-center md:text-start text-muted-foreground"></CardDescription>
        </div>

        <Button asChild variant="outline">
          <Link href={`/admin/pengguna/${role}/tambah`}>
            <UserPlus />
            Tambah {content[0].title}
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<DataTableSkeleton columnCount={3} />}>
          <TabelUser promises={promises} />
        </Suspense>
      </CardContent>
    </Card>
  );
}

export const validRoles = ["admin", "cashier", "customer"];

export const penggunaContentMapping = [
  {
    title: "Admin",
    path: "admin",
  },
  {
    title: "Kasir",
    path: "cashier",
  },
  {
    title: "Kustomer",
    path: "customer",
  },
];
