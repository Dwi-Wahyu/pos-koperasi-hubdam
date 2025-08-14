-- AlterTable
ALTER TABLE `product` ADD COLUMN `stock` INTEGER NULL;

-- AlterTable
ALTER TABLE `transaction_item` ADD COLUMN `product_id` INTEGER NULL,
    MODIFY `product_option_id` INTEGER NULL;

-- CreateIndex
CREATE INDEX `transaction_item_product_id_fkey` ON `transaction_item`(`product_id`);

-- AddForeignKey
ALTER TABLE `transaction_item` ADD CONSTRAINT `transaction_item_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
