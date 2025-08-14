"use client";

import { Label } from "@/components/ui/label";
import { FilterX, PackageX, Search, Tag } from "lucide-react";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

import { getAllCategory } from "../admin/kategori/queries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProductDataForCashier } from "../input-transaksi/queries";
import { ProductCardForList } from "./card";

export function ProductListPageClient({
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

  const [name, setName] = useQueryState("name", {
    shallow: false,
    clearOnDefault: true,
    defaultValue: "",
  });

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

  function handleResetFilter() {
    setCategories([]);
    setName("");
  }

  return (
    <div className="">
      <div className="w-full space-y-2">
        <Label className="text-lg">Pencarian</Label>
        <div className="flex gap-4 w-full">
          <Input
            type="text"
            placeholder="Cari Berdasarkan Nama Produk"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleResetFilter}>
            <FilterX />

            <span className="hidden md:block">Reset Filter</span>
          </Button>
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

      {products.data.length ? (
        <div className="grid mt-5 md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1">
          {products.data.map((product, idx) => {
            return <ProductCardForList product={product} key={idx} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center md:flex-row flex-col mt-24 items-center gap-4">
          <h1 className="text-2xl font-semibold">Produk Kosong</h1>
          <PackageX className="w-14 h-14" />
          <div>
            <h1 className="text-2xl font-semibold hidden md:block">
              Produk Kosong
            </h1>
            <h1 className="text-muted-foreground text-center md:text-start">
              Sesuaikan Kombinasi Pencarian Anda
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
