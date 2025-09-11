-- CreateTable
CREATE TABLE "public"."test_table" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "test_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."another_table" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "another_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "test_table_email_key" ON "public"."test_table"("email");

-- AddForeignKey
ALTER TABLE "public"."another_table" ADD CONSTRAINT "another_table_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."test_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
