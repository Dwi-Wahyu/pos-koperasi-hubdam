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
import { Cog, Search, Tag } from "lucide-react";
import { getProductDataForCashier } from "./queries";
import { CashierProductCard, ProductType } from "./product-card";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import { getAllCategory } from "../admin/kategori/queries";
import { product_variant } from "../generated/prisma";

export type CategoriesType = {
  id: number;
  name: string;
};

export type CartItemType = {
  id: number;
  name: string;
  is_single_variant: boolean;
  price: number;
  qty: number;
  image?: string;
  unit?: string;
  variants: product_variant[];
};

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

  const [productsSelected, setProductsSelected] = useState<CartItemType[]>([]);

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

  function handleAddProduct(product: ProductType, qty: number) {
    const existingProductIndex = productsSelected.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...productsSelected];
      updatedProducts[existingProductIndex].qty = qty;
      setProductsSelected(updatedProducts);
    } else {
      setProductsSelected([
        ...productsSelected,
        {
          id: product.id,
          name: product.name,
          is_single_variant: product.is_single_variant,
          price: product.price,
          qty: qty,
          image: product.image ?? "",
          unit: product.unit ?? "",
          variants: product.variants,
        },
      ]);
    }
  }

  return (
    <div className="flex p-6 min-h-svh">
      <div className="flex-4/6 pr-7">
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
              variant={checkCategoryActive(category.id) ? "default" : "outline"}
            >
              <Tag />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid mt-5 md:grid-cols-3 gap-4 grid-cols-2">
          {products.data.map((product, idx) => {
            return (
              <CashierProductCard
                product={product}
                key={idx}
                addProduct={handleAddProduct}
              />
            );
          })}
        </div>
      </div>

      <Card className="flex-2/6">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <CardTitle className="text-xl font-bold">
              Ringkasan Transaksi
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            {productsSelected.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h1 className="font-semibold">{product.name}</h1>
                  <p className="text-sm text-muted-foreground">
                    {product.qty} x {product.price}
                  </p>

                  {!product.is_single_variant && (
                    <div>
                      <h1>bukan single</h1>
                    </div>
                  )}
                </div>
                <span className="font-bold">
                  Rp {product.qty * product.price}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <div className="rounded-lg bg-background items-center border px-4 py-3 flex justify-between">
              <h1 className="font-bold">Total:</h1>
              <h1 className="text-xl font-bold">
                Rp{" "}
                {productsSelected.reduce(
                  (total, item) => total + item.qty * item.price,
                  0
                )}
              </h1>
            </div>

            <Button>
              <Cog className="mr-2 h-4 w-4" />
              Proses Transaksi
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
