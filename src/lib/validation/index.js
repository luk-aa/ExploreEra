import { z } from "zod";

export const SignupValidation = z.object({
  firstname: z.string().min(2, { message: "Too short" }),
  lastname: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
  image: z.any(),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
});
