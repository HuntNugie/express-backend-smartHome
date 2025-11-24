-- CreateTable
CREATE TABLE `servo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_servo` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
