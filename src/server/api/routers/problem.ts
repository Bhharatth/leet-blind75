import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { problemInputSchema } from "@/common/authSchema";
import { TRPCError } from "@trpc/server";

export const ProblemRouter = createTRPCRouter({

  createNewProblem: protectedProcedure
    .input(problemInputSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      if (!userId) {
        throw new Error("User Id is not found in session")
      }
      const res = await ctx.db.problemDetails.createMany({
        data: {
          title: input.title,
          category: input.category,
          difficulty: input.difficulty,
          likes: input.likes,
          dislikes: input.dislikes
        }
      });
      return res;
    }),
  updateNewProblem: protectedProcedure.input(problemInputSchema).mutation(async ({ ctx, input }) => {
    const userId = ctx.session.user.id;

    if (!userId) {
      throw new Error("userId is not found in this session");
    }

    const updatedProblem = await ctx.db.problemDetails.update({
      where: {
        id: parseInt(input.id),

      },
      data: {
        title: input.title,
        category: input.category,
        difficulty: input.difficulty,
        likes: input.likes,
        dislikes: input.dislikes,
      }
    });

    if (!updatedProblem) {
      throw new TRPCError({
        message: "Unable to update Problems",
        code: "UNPROCESSABLE_CONTENT"
      })
    }
    return updatedProblem;
  }),
  getAllProblems: publicProcedure.query(async({ctx, input})=> {
    const res = await ctx.db.problemDetails.findMany();
    if(!res){
      throw new TRPCError({
        message: "unable to get problems right now",
        code: "INTERNAL_SERVER_ERROR"
      })
    }

    return res;
  })


});
