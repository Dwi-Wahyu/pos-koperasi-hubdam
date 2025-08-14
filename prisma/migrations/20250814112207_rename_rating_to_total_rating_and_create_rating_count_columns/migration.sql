/*
  Warnings:

  - You are about to drop the column `rating` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `rating`,
    ADD COLUMN `rating_count` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `total_rating` INTEGER NOT NULL DEFAULT 0;
