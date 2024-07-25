/*
  Warnings:

  - You are about to drop the column `name` on the `User2` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User2` table. All the data in the column will be lost.
  - Added the required column `passWord` to the `User2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User2" DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "passWord" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
