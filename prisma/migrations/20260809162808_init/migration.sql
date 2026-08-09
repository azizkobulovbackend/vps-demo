-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(5) NOT NULL,
    "pinfl" VARCHAR(14),
    "uuid" VARCHAR(36) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_idx" ON "users"("uuid");

-- CreateIndex
CREATE INDEX "users_pinfl_idx" ON "users"("pinfl");
