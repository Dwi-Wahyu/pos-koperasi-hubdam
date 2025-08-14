"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { ImageOff, ShoppingBasket } from "lucide-react";
import { getProductDataForCashier } from "../input-transaksi/queries";
import { getAllCategoryIncludingProducts } from "../admin/produk/queries";

type ProductTypeFromCategory = Awaited<
  ReturnType<typeof getAllCategoryIncludingProducts>
>[number]["product"][number];

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

export function ProductCard({ product }: { product: ProductTypeFromCategory }) {
  return (
    <Card>
      <CardContent className="space-y-5">
        <CardTitle>{product.name}</CardTitle>

        {product.image ? (
          <img
            src={adminUrl + product.image}
            alt="product"
            className="w-75 rounded-lg"
          />
        ) : (
          <ImageOff />
        )}

        <div className="flex items-center gap-2">
          {product.categories.map((category) => (
            <Badge key={category.id} variant="outline">
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">
            {product.price} / {product.unit}
          </span>
        </div>

        <div className="flex justify-end">
          <Button variant={"outline"}>
            <ShoppingBasket />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
