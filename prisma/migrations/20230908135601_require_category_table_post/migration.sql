/*
  Warnings:

  - Made the column `categoryId` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Post_categoryId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` MODIFY `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
