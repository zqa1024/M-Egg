/*
  Warnings:

  - Made the column `userId` on table `logined` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "logined" DROP CONSTRAINT "logined_userId_fkey";

-- AlterTable
ALTER TABLE "logined" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "User2" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User2_email_key" ON "User2"("email");

-- AddForeignKey
ALTER TABLE "logined" ADD CONSTRAINT "logined_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
