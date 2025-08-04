-- AlterTable
ALTER TABLE "public"."Comment" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");
