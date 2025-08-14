"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Tag } from "lucide-react";
import { getAllCategory } from "../../kategori/queries";
import { getProductDataForCashier } from "./queries";
import { CashierProductCard, ProductType } from "./product-card";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import { transaction_item } from "@/app/generated/prisma";

export function InputTransaksiPageClient({
  allCategories,
  products,
}: {
  allCategories: Awaited<ReturnType<typeof getAllCategory>>;
  products: Awaited<ReturnType<typeof getProductDataForCashier>>;
}) {
  const [categories, setCategories] = useQueryState("categories", {
    clearOnDefault: true,
    shallow: false,
    ...parseAsArrayOf(parseAsInteger).withDefault([]),
  });

  const [productsSelected, setProductsSelected] = useState<ProductType[]>([]);
  const [itemsSelected, setItemSelected] = useState<transaction_item[]>([]);

  function handleSelectCategory(id: number) {
    const exists = categories.includes(id);

    if (exists) {
      setCategories(categories.filter((value) => value !== id));
    } else {
      setCategories([...categories, id]);
    }
  }

  function checkCategoryActive(id: number) {
    const find = categories.some((value) => value === id);

    return find;
  }

  function handleAddItem(item: transaction_item, qty: number) {
    const exists = itemsSelected.includes(item);

    if (!exists) {
      setItemSelected([...itemsSelected, item]);
    }
  }

  function handleAddProduct(product: ProductType, qty: number) {
    const exists = productsSelected.includes(product);

    if (!exists) {
      setProductsSelected([...productsSelected, product]);
    }
  }

  return (
    <div className="flex">
      <div className="grow pr-7">
        <div className="w-full space-y-2">
          <Label className="text-lg">Cari Produk</Label>
          <div className="relative">
            <div className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </div>
            <Input type="text" placeholder="Username" className="peer ps-9" />
          </div>
        </div>

        <div className="flex mt-5 gap-4 items-center flex-wrap">
          {allCategories.map((category, idx) => (
            <Button
              key={idx}
              onClick={() => handleSelectCategory(category.id)}
              variant={
                checkCategoryActive(category.id)
                  ? "default"
                  : ("outline" as
                      | "success"
                      | "outline"
                      | "default"
                      | "destructive"
                      | "ghost"
                      | "link"
                      | null
                      | undefined)
              }
            >
              <Tag />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid mt-5 md:grid-cols-3 grid-cols-2">
          {products.data.map((product, idx) => {
            return (
              <CashierProductCard
                product={product}
                key={idx}
                handleAddProduct={handleAddProduct}
                handleAddItem={handleAddItem}
              />
            );
          })}
        </div>
      </div>

      <Card className="w-[40rem]">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <CardTitle className="text-xl font-bold">
              Ringkasan Transaksi
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Produk
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-full justify-between">
          {productsSelected.map((product) => (
            <div key={product.id}>
              <h1>{product.name}</h1>
            </div>
          ))}

          <div className="rounded-lg bg-background border p-4">
            <h1 className="text-secondary text-end">Total : </h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
