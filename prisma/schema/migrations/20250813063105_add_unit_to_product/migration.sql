/*
  Warnings:

  - You are about to drop the column `inventoryId` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_inventoryId_fkey`;

-- DropIndex
DROP INDEX `product_inventoryId_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `inventoryId`,
    ADD COLUMN `inventory_id` INTEGER NULL,
    ADD COLUMN `unit` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `product_inventory_id_fkey` ON `product`(`inventory_id`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_inventory_id_fkey` FOREIGN KEY (`inventory_id`) REFERENCES `inventory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
