import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/ui/motion-tabs";
import { getAllCategoryIncludingProducts } from "@/app/admin/produk/queries";
import { Card } from "@/components/ui/card";
import { ProductCard } from "../product-card";
import { ProductsDiv } from "./products-div";

export async function KategoriSection() {
  const allCategoriesIncludeProduct = await getAllCategoryIncludingProducts();

  const mapped = allCategoriesIncludeProduct.map((category) => ({
    name: category.name,
    value: category.id.toString(),
    content: <ProductsDiv products={category.product} />,
  }));

  return (
    <div className="w-full">
      <Tabs defaultValue={mapped[0].value} className="gap-4">
        <TabsList>
          {mapped.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContents className="w-full">
          {mapped.map((tab) => (
            <TabsContent key={tab.value} className="w-full" value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </TabsContents>
      </Tabs>
    </div>
  );
}

// const tabs = [
//   {
//     name: "Explore",
//     value: "explore",
//     content: (
//       <>
//         Discover{" "}
//         <span className="text-foreground font-semibold">fresh ideas</span>,
//         trending topics, and hidden gems curated just for you. Start exploring
//         and let your curiosity lead the way!
//       </>
//     ),
//   },
//   {
//     name: "Favorites",
//     value: "favorites",
//     content: (
//       <>
//         All your{" "}
//         <span className="text-foreground font-semibold">favorites</span> are
//         saved here. Revisit articles, collections, and moments you love, any
//         time you want a little inspiration.
//       </>
//     ),
//   },
//   {
//     name: "Surprise Me",
//     value: "surprise",
//     content: (
//       <>
//         <span className="text-foreground font-semibold">Surprise!</span>{" "}
//         Here&apos;s something unexpected—a fun fact, a quirky tip, or a daily
//         challenge. Come back for a new surprise every day!
//       </>
//     ),
//   },
// ];
