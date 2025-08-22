-- AlterTable
ALTER TABLE `product` ADD COLUMN `sku` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `avatar` VARCHAR(191) NULL DEFAULT '/uploads/avatar/default-avatar.jpg';
