import { z } from "zod";

export const RegisterValidator = z.object({
  firstname: z.string().nonempty({error:"Le nom est requis."}),
  lastname: z.string().nonempty({error:"Le prenom est requis."}),
  email: z.string().email({error:"Email invalide."}),
  password: z.string().nonempty({error:"Le mot de passe est requis."}),
  confirmPassword: z.string().nonempty({error:"confirmer le mot de passe"}),
}).refine((data) => data.password === data.confirmPassword,{
    message:"Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],});

export const LoginValidator = z.object({
  email: z.string().email({error:"Email invalide."}),
  password: z.string().nonempty({error:"Le mot de passe est requis."}),
})

export const ForgotPasswordValidator = z.object({
  email: z.string().email({error:"Email invalide."}),
})

export const ResetPasswordValidator = z.object({
  email: z.string().email({error:"Email invalide."}),
  password: z.string().nonempty({error:"Le mot de passe est requis."}),
  confirmPassword: z.string().nonempty({error:"confirmer le mot de passe"}),
}).refine((data) => data.password === data.confirmPassword,{
    message:"Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],});

