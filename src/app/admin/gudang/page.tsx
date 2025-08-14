import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Boxes,
  HousePlus,
  Package,
  SquarePen,
  Trash2,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { InputGudangDialog } from "./input-dialog";
import { getAllGudang } from "./queries";
import { DeleteGudangDialog } from "./delete-dialog";
import { EditGudangDialog } from "./edit-dialog";

export default async function GudangPage() {
  const allGudang = await getAllGudang();

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader className="flex flex-col gap-4 md:flex-row items-center md:justify-between">
        <div>
          <CardTitle className="text-center md:text-start text-xl font-bold">
            Manajemen Gudang
          </CardTitle>
          <CardDescription className="text-center md:text-start text-muted-foreground">
            Daftar Gudang Koperasi
          </CardDescription>
        </div>

        <InputGudangDialog />
      </CardHeader>
      {allGudang.length ? (
        <CardContent className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allGudang.map((gudang) => (
            <Card
              key={gudang.id}
              className="hover:shadow-lg  transition-shadow"
            >
              <CardContent>
                <h1 className="font-semibold mb-3">{gudang.name}</h1>

                <div className="w-full h-32 bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Warehouse />
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Button asChild variant="default" size="icon">
                    <Link href={`/admin/gudang/${gudang.id}`}>
                      <Boxes />
                    </Link>
                  </Button>

                  <EditGudangDialog id={gudang.id} name={gudang.name} />

                  <DeleteGudangDialog id={gudang.id} />
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      ) : (
        <CardContent>
          <h1 className="font-semibold text-xl">Belum Ada Gudang</h1>
        </CardContent>
      )}
    </Card>
  );
}
