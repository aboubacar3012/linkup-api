-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_premium" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_profile_complete" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL;
