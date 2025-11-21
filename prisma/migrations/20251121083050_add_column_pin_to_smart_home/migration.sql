/*
  Warnings:

  - Added the required column `pin` to the `smartHome` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `smartHome` ADD COLUMN `pin` INTEGER NOT NULL;
