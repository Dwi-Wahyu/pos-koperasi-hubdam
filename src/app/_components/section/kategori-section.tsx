import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function KategoriSection() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Kategori</CardTitle>
        <CardDescription>Kategori Produk Yang Tersedia</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 grid-cols-2 md:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((count, idx) => (
          <div
            className="bg-background text-center border rounded-lg p-4"
            key={idx}
          >
            <h1>Kategori {count}</h1>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
