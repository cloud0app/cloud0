import { withAccelerate } from "@prisma/extension-accelerate";
import superjson from "superjson";
import { PrismaClient } from "../generated/prisma";

const createPrismaClient = () =>
   new PrismaClient({
      errorFormat: "pretty",
      // log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
   });

const globalForPrisma = globalThis as unknown as {
   prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = (globalForPrisma.prisma ?? createPrismaClient())
   .$extends({
      query: {
         $allModels: {
            $allOperations(params) {
               const isReadOp = ["findMany", "findUnique", "findFirst"].includes(params.operation);
               return params.query(params.args).then((result) => {
                  return isReadOp ? superjson.parse(superjson.stringify(result)) : result;
               });
            },
         },
      },
   })
   .$extends(process.env.NODE_ENV === "production" ? withAccelerate() : {});

// @ts-ignore
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

declare global {
   interface BigInt {
      toJSON(): Number;
   }
}
