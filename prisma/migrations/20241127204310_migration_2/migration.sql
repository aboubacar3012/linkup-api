-- AlterTable
ALTER TABLE "User" ADD COLUMN     "show_company" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "show_email" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "show_phone" BOOLEAN NOT NULL DEFAULT false;
