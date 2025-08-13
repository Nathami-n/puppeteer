
import { PrismaClient } from "~/generated/prisma/client";
import { NODE_ENV } from "../env/env.server";

const globalForPrisma = globalThis as unknown as { db: PrismaClient }

export const db = globalForPrisma.db || new PrismaClient();

if (NODE_ENV !== "production") globalForPrisma.db = db;