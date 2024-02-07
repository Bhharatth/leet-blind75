import { createTRPCRouter } from "@/server/api/trpc";
import { accountRouter } from "./routers/account";
import { ProblemRouter } from "./routers/problem";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  problem: ProblemRouter,
  account: accountRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
