/*
  Warnings:

  - You are about to drop the `C` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "C";

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
