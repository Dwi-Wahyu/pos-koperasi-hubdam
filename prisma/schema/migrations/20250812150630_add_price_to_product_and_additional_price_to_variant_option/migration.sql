/*
  Warnings:

  - You are about to drop the column `price` on the `product_option` table. All the data in the column will be lost.
  - Added the required column `cost` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `additional_price` to the `product_option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `cost` INTEGER NOT NULL,
    ADD COLUMN `is_single_variant` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product_option` DROP COLUMN `price`,
    ADD COLUMN `additional_price` INTEGER NOT NULL,
    ALTER COLUMN `cost` DROP DEFAULT;
