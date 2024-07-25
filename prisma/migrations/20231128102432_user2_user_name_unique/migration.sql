/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `User2` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User2_userName_key" ON "User2"("userName");
