/*
  Warnings:

  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `preorder` DROP FOREIGN KEY `preorder_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `preorder` DROP FOREIGN KEY `preorder_product_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_history` DROP FOREIGN KEY `product_history_product_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_option` DROP FOREIGN KEY `product_option_variant_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_variant` DROP FOREIGN KEY `product_variant_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `transaction_item` DROP FOREIGN KEY `transaction_item_product_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `transaction_item` DROP FOREIGN KEY `transaction_item_transaction_id_fkey`;

-- DropIndex
DROP INDEX `product_category_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `inventory` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category_id`,
    ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `product_option` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `product_variant` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `deleted_at` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `_categoryToproduct` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_categoryToproduct_AB_unique`(`A`, `B`),
    INDEX `_categoryToproduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `preorder` ADD CONSTRAINT `preorder_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_option`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `preorder` ADD CONSTRAINT `preorder_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_variant` ADD CONSTRAINT `product_variant_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_option` ADD CONSTRAINT `product_option_variant_id_fkey` FOREIGN KEY (`variant_id`) REFERENCES `product_variant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_history` ADD CONSTRAINT `product_history_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_option`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_item` ADD CONSTRAINT `transaction_item_product_option_id_fkey` FOREIGN KEY (`product_option_id`) REFERENCES `product_option`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction_item` ADD CONSTRAINT `transaction_item_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_categoryToproduct` ADD CONSTRAINT `_categoryToproduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_categoryToproduct` ADD CONSTRAINT `_categoryToproduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
