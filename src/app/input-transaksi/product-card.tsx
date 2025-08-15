"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { getProductDataForCashier } from "./queries";
import { Check, ImageOff, ShoppingBasket, Tag } from "lucide-react";
import { useEffect, useState } from "react";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CartItemType } from "./client";
import { InputProdukDialogToTransaksi } from "./input-dialog";

export type ProductType = Awaited<
  ReturnType<typeof getProductDataForCashier>
>["data"][number];

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

export function CashierProductCard({
  product,
  addProduct,
}: {
  product: ProductType;
  addProduct: (product: ProductType, qty: number) => void;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (qty < 0) {
      setQty(0);
    }

    if (isClicked) {
      addProduct(product, qty);
    }
  }, [qty]);

  function handleAdd() {
    addProduct(product, qty);
  }

  return (
    <Card className="h-fit">
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

        {!product.is_single_variant && product.variants.length && (
          <InputProdukDialogToTransaksi
            product={product}
            addProduct={addProduct}
          />

          // <div className={`flex flex-wrap gap-3`}>
          //   {product.variants.flatMap((variant) => {
          //     return variant.options.map((option) => (
          //       <Button
          //         key={option.id}
          //         variant={"outline"}
          //         size={"sm"}
          //         className="cursor-pointer group overflow-hidden rounded-lg"
          //       >
          //         <Tag />
          //         <h1>{option.option_value}</h1>
          //       </Button>
          //     ));
          //   })}
          // </div>
        )}

        {product.is_single_variant && (
          <div className="justify-between flex items-center gap-3 max-sm:flex-col">
            <div className="flex items-center">
              <Button
                slot="decrement"
                size={"icon"}
                onClick={() => setQty(qty - 1)}
                className="border-input bg-background rounded-r-none text-muted-foreground hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <MinusIcon />
                <span className="sr-only">Decrement</span>
              </Button>
              <Input
                className="selection:bg-primary border-l-0 border-r-0 rounded-none selection:text-primary-foreground w-full grow px-3 py-2 text-center tabular-nums outline-none"
                value={qty}
                onChange={(e) => {
                  const value = e.target.value;
                  const sanitizedValue = value.replace(/[^0-9]/g, "");
                  const newQty = parseInt(sanitizedValue, 10);

                  if (!isNaN(newQty)) {
                    setQty(newQty);
                  } else {
                    setQty(0);
                  }
                }}
              />
              <Button
                slot="increment"
                size={"icon"}
                onClick={() => setQty(qty + 1)}
                className="border-input bg-background rounded-l-none text-muted-foreground hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <PlusIcon />
                <span className="sr-only">Increment</span>
              </Button>
            </div>

            {isClicked ? (
              <Button variant={"success"}>
                <Check />
              </Button>
            ) : (
              <Button
                variant={"outline"}
                onClick={() => {
                  setIsClicked(true);
                  handleAdd();
                }}
              >
                <ShoppingBasket />
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
