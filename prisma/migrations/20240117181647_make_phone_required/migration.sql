/*
  Warnings:

  - Made the column `phone` on table `contact` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "gender" TEXT,
    "website" TEXT,
    "nationality" TEXT,
    "dob" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL,
    "addressId" TEXT,
    "companyId" TEXT,
    CONSTRAINT "contact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "contact_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_contact" ("addressId", "companyId", "createdAt", "dob", "email", "firstName", "gender", "id", "lastName", "nationality", "phone", "updateDate", "website") SELECT "addressId", "companyId", "createdAt", "dob", "email", "firstName", "gender", "id", "lastName", "nationality", "phone", "updateDate", "website" FROM "contact";
DROP TABLE "contact";
ALTER TABLE "new_contact" RENAME TO "contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
