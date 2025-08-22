/*
  Warnings:

  - A unique constraint covering the columns `[product_id,name]` on the table `product_variant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `product_option_sku_key` ON `product_option`;

-- DropIndex
DROP INDEX `product_variant_name_key` ON `product_variant`;

-- CreateIndex
CREATE UNIQUE INDEX `product_variant_product_id_name_key` ON `product_variant`(`product_id`, `name`);
