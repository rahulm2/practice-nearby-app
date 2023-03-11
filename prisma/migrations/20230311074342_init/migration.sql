-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "gender" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTracking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lat" INTEGER,
    "lng" INTEGER,

    CONSTRAINT "UserTracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTracking_userId_key" ON "UserTracking"("userId");

-- CreateIndex
CREATE INDEX "UserTracking_userId_idx" ON "UserTracking"("userId");

-- AddForeignKey
ALTER TABLE "UserTracking" ADD CONSTRAINT "UserTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
