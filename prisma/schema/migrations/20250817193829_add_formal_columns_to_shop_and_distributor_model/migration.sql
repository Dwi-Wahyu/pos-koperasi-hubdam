/*
  Warnings:

  - You are about to drop the column `location` on the `distributor` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `shop` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `distributor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `shop` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `distributor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `shop_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `distributor` DROP COLUMN `location`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `banner` VARCHAR(191) NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `logo` VARCHAR(191) NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('PENDING', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `tax_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `shop` DROP COLUMN `location`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `banner` VARCHAR(191) NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `logo` VARCHAR(191) NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('PENDING', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `tax_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `role` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `distributor_email_key` ON `distributor`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `shop_email_key` ON `shop`(`email`);

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `shop`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
