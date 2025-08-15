"use client";

import { getProductById } from "@/app/admin/produk/queries";
import { product_option } from "@/app/generated/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rating, RatingButton } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import { ImageOff, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { addProductRating } from "./action";

export function DetailProdukPageClient({
  product,
}: {
  product: NonNullable<Awaited<ReturnType<typeof getProductById>>>;
}) {
  if (product.is_single_variant) {
    return <SingleVariantProduct product={product} />;
  }

  return <MultiVariantProduct product={product} />;
}

type ProductType = NonNullable<Awaited<ReturnType<typeof getProductById>>>;
type ProductOptionType = ProductType["variants"][number]["options"][number];

function SingleVariantProduct({ product }: { product: ProductType }) {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

  const averageRating =
    product.rating_count !== 0
      ? product.total_rating / product.rating_count
      : 0;

  function handleChangeRating(rating: number) {
    addProductRating(product.id, rating);
  }

  return (
    <div>
      <div className="flex gap-7 flex-col md:flex-row">
        <div>
          {product.image ? (
            <div className="w-full grow h-fit overflow-hidden rounded-lg">
              <img
                src={adminUrl + product.image}
                alt="product"
                className="w-full  h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ) : (
            <div className="w-full grow h-fit flex items-center justify-center rounded-lg bg-gray-100">
              <ImageOff className="text-gray-400" />
            </div>
          )}
        </div>

        <Card className="md:w-4xl w-full h-fit">
          <CardContent className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-2xl">{product.name}</h1>

              <h1 className="font-bold text-xl text-success">
                Rp {product.price}{" "}
                {product.is_single_variant && <span> / {product.unit}</span>}
              </h1>
            </div>

            <p className="text-sm text-justify text-muted-foreground">
              {product.description ?? "-"}
            </p>

            <div>
              <h1>Stok Tersedia</h1>
              <h1 className="text-muted-foreground">
                {product.stock} / {product.unit}
              </h1>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <div className="">
                <div className="flex items-center gap-1">
                  <Rating
                    defaultValue={averageRating}
                    onValueChange={(val) => handleChangeRating(val)}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} />
                    ))}
                  </Rating>
                  <h1 className="font-semibold">{averageRating}</h1>
                </div>

                <h1 className="mt-1 font-semibold text-sm">
                  {product.rating_count} Review
                </h1>
              </div>

              <div className="flex justify-end">
                <Button>
                  <ShoppingCart />
                  <span className="hidden md:block">
                    Tambahkan Ke Keranjang
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MultiVariantProduct({ product }: { product: ProductType }) {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3000";

  const [selectedOption, setSelectedOption] = useState<product_option | null>(
    null
  );

  const averageRating =
    product.rating_count !== 0
      ? product.total_rating / product.rating_count
      : 0;

  const defaultOption = {
    image: product.image,
    additional_price: 0,
    stock: product.stock,
    description: product.description,
    sku: product.sku,
  } as product_option;

  const displayData = selectedOption || defaultOption;

  function changeProductOrOption(selected: product_option) {
    setSelectedOption(selected);
  }

  function handleChangeRating(rating: number) {
    addProductRating(product.id, rating);
  }

  return (
    <div>
      <div className="flex gap-7 flex-col md:flex-row">
        <div className="flex-2/3 p-5 border rounded-lg">
          {displayData.image ? (
            <div className="w-full h-fit overflow-hidden rounded-lg">
              {/* <Image
                src={adminUrl + displayData.image}
                alt="product"
                className="w-full max-h-96 h-full rounded-lg object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                width={500}
                height={500}
              /> */}

              <img
                src={adminUrl + product.image}
                alt="product"
                className="w-full  h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ) : (
            <div className="w-full h-fit flex items-center justify-center rounded-lg bg-gray-100">
              <ImageOff className="text-gray-400" />
            </div>
          )}

          {product.variants.length && (
            <div
              className={`grid bottom-0 left-0 grid-cols-2 md:grid-cols-5 gap-4 mt-4`}
            >
              {product.variants.flatMap((variant) => {
                return variant.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => changeProductOrOption(option)}
                    className="w-full relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                  >
                    <Image
                      src={adminUrl + option.image}
                      alt="product"
                      className=" object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      fill
                    />
                  </button>
                ));
              })}
            </div>
          )}
        </div>

        <Card className="flex-1/3 w-full h-fit">
          <CardContent className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-2xl">
                {product.name}{" "}
                {displayData.option_value && (
                  <span>- {displayData.option_value}</span>
                )}
              </h1>
            </div>

            <p className="text-sm text-justify text-muted-foreground">
              {displayData.description ?? "-"}
            </p>

            <div className="">
              <div className="flex items-center gap-1">
                <Rating
                  defaultValue={averageRating}
                  onValueChange={(val) => handleChangeRating(val)}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton key={index} />
                  ))}
                </Rating>
                <h1 className="font-semibold">{averageRating}</h1>
              </div>

              <h1 className="mt-1 font-semibold text-sm">
                {product.rating_count} Review
              </h1>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl text-success">
                Rp {product.price + displayData.additional_price}{" "}
                {product.is_single_variant && <span> / {product.unit}</span>}
              </h1>

              <div className="flex justify-end">
                <Button>
                  <ShoppingCart />
                  {/* <span className="hidden md:block">
                    Tambahkan Ke Keranjang
                  </span> */}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
