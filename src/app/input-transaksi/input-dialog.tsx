import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HousePlus, MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductType } from "./product-card";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { product_option, product_variant } from "../generated/prisma";

export function InputProdukDialogToTransaksi({
  product,
  addProduct,
}: {
  product: ProductType;
  addProduct: (product: ProductType, qty: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [qty, setQty] = useState(1);

  const [selectedVariantOptions, setSelectedVariantOptions] = useState<
    product_option[] | []
  >([]);

  function handleAddProduct() {
    addProduct(product, qty);
  }

  function handleAddSelectedVariantOption(option: product_option) {
    const exists = selectedVariantOptions.some((o) => o.id === option.id);

    if (!exists) {
      setSelectedVariantOptions([option, ...selectedVariantOptions]);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="btn btn-primary">
        <Button variant="outline">
          <ShoppingCart />
          Tambahkan Produk
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Pilih Varian Dan Jumlah</DialogDescription>
        </DialogHeader>

        {product.variants.flatMap((variant) => (
          <div key={variant.id}>
            <Label>{variant.name}</Label>

            <div className="mt-2 flex gap-2">
              {variant.options.map((option) => (
                <Button variant={"outline"} key={option.id}>
                  <h1>{option.option_value}</h1>|<h1>{option.stock}</h1>
                </Button>
              ))}
            </div>
          </div>
        ))}

        <div className="justify-between flex items-center gap-3 max-sm:flex-col">
          <div className="flex items-center grow">
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

          <Button>Tambahkan</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
