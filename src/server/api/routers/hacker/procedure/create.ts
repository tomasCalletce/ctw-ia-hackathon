import { db } from "~/server/db/connection";
import { publicProcedure } from "~/server/api/trpc";
import { hackers, verifyHackersSchema } from "~/server/db/schemas/hackers";
import { TRPCError } from "@trpc/server";

export const create = publicProcedure
  .input(verifyHackersSchema)
  .mutation(async ({ input }) => {
    const [newHacker] = await db
      .insert(hackers)
      .values({
        name: input.name,
        role: input.role,
        email: input.email,
      })
      .returning({
        id: hackers.id,
      });
    if (!newHacker) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create hacker",
      });
    }

    return newHacker;
  });
