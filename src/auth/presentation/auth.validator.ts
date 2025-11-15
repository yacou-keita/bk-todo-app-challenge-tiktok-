import { z } from "zod";

export const registerSchema = z.object({
  firstname: z.string().nonempty({error:"Firstname required"}),
  lastname: z.string().nonempty({error:"Lastname required"}),
  email: z.string().nonempty({error:"Firstname required"}).email({error:"Invalid email"}),
  password: z.string().nonempty({error:"Password required"}),
  confirmPassword: z.string().nonempty({error:"cPassword required"}),
});

export type RegisterValidator = z.infer<typeof registerSchema>;

export type LoginValidator = Pick<RegisterValidator, "email" | "password">
