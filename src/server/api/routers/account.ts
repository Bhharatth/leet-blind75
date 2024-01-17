import { z, ZodError } from "zod";
import { loginSchema, signUpSchema } from "@/common/authSchema";
import bcrypt from 'bcrypt';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";



export const accountRouter = createTRPCRouter({
  signup: publicProcedure.input(signUpSchema)
    .mutation(async({ input,ctx }) => {

      try {
        const validateInput = signUpSchema.parse(input);

    const {userName, email, password} = validateInput;
    const checkIfEmailExists = await ctx.db.user.findFirst({
      where: {email}
    });

    if(checkIfEmailExists){
      throw new TRPCError({
        message: "Email already exists",
        code: "FORBIDDEN"
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const res = await ctx.db.user.create({
      data: {
        name: userName,
        email: email,
        password:hashedPassword
      }
    });

    return {
      message: "Account created successfully",
      status: 201,
      res: res.email
    }
        
      } catch (error) {
        if (error instanceof ZodError) {
          const validationErrors = error.errors.map((validationError) => {
            return {
              // path: validationError.path.join("."),
              message: validationError.message,
            };
          });
    
          return {
            message: "Validation error",
            code: "BAD_REQUEST",
            validationErrors,
          };
        
      }
    
    }
  }
    
  ),

  updateUser: publicProcedure.input(loginSchema).mutation(async({input, ctx})=> {
    const validateInput = loginSchema.parse(input);
    const {email, password} = validateInput;

    const emailExists = await ctx.db.user.findFirst({
      where: {
        email
      }
    });

    if(!emailExists){
      throw new TRPCError({
        message: 'Email not found',
        code: 'NOT_FOUND',
      });
    };

    const res = await ctx.db.user.update({
      where: {email},
      data: {
        password
      },
    });

    return {
      success: true,
      message: 'User updated successfully!',
      user: {
        email,
        password,
      }
    }
  })
});







