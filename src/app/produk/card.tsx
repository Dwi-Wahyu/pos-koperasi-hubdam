"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { EyeIcon, ImageOff, ShoppingBasket } from "lucide-react";
import { getProductDataForCashier } from "../input-transaksi/queries";
import { getAllCategoryIncludingProducts } from "../admin/produk/queries";
import Link from "next/link";
import Image from "next/image";

type ProductTypeFromCategory = Awaited<
  ReturnType<typeof getProductDataForCashier>
>["data"][number];

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

export function ProductCardForList({
  product,
}: {
  product: ProductTypeFromCategory;
}) {
  return (
    <Link href={"/produk/" + product.id}>
      <Card className="group">
        <CardContent className="space-y-5">
          <CardTitle>{product.name}</CardTitle>

          {product.image ? (
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <Image
                src={adminUrl + product.image}
                alt="product"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                width={500}
                height={200}
              />
            </div>
          ) : (
            <div className="w-full h-[200px] flex items-center justify-center rounded-lg bg-gray-100">
              <ImageOff className="text-gray-400" />
            </div>
          )}

          <div className="flex items-center flex-wrap gap-2">
            {product.categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
                className="break-words"
              >
                {category.name}
              </Badge>
            ))}
          </div>

          {product.description !== "" && (
            <p className="text-sm line-clamp-3">{product.description}</p>
          )}

          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {product.price} / {product.unit}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
