import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(3).max(16).optional(),
  });


  export const signUpSchema = loginSchema
  .extend({
    userName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3).max(30),
  });

  export const updateUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3).max(30),
  });

  export const problemInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    difficulty: z.string(),
    likes: z.number(),
    dislikes: z.number(),
  })

export type ILogin = z.infer<typeof loginSchema>;
export type IUpdateUser = z.infer<typeof updateUserSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;
export type IProblemInputSchema = z.infer<typeof problemInputSchema>;

export type SignUpResponse = {
    message: string;
    status: number;
    res: string; // Assuming email is a string, adjust if needed
  };