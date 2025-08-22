-- AlterTable
ALTER TABLE `shop` ADD COLUMN `suspend_reason` VARCHAR(191) NULL,
    MODIFY `status` ENUM('PENDING', 'ACTIVE', 'INACTIVE', 'REJECTED', 'SUSPENDED') NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE `discount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `discount` ADD CONSTRAINT `discount_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
