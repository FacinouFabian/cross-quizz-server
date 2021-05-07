/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Scores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Scores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Scores" DROP CONSTRAINT "Scores_id_fkey";

-- AlterTable
ALTER TABLE "Scores" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Scores.userId_unique" ON "Scores"("userId");

-- AddForeignKey
ALTER TABLE "Scores" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
