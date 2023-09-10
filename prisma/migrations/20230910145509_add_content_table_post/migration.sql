-- DropIndex
DROP INDEX `Post_categoryId_fkey` ON `post`;

-- DropIndex
DROP INDEX `Post_userId_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `content` MEDIUMTEXT NOT NULL DEFAULT '',
    MODIFY `title` VARCHAR(255) NOT NULL DEFAULT '',
    MODIFY `description` MEDIUMTEXT NOT NULL DEFAULT '',
    MODIFY `image` VARCHAR(255) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
