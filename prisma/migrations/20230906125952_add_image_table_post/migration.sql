/*
  Warnings:

  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Post_categoryId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `image` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
