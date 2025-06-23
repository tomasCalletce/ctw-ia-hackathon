import { createTRPCRouter } from "~/server/api/trpc";
import { create } from "./procedure/create";

export const hackerRouter = createTRPCRouter({
  create,
});
