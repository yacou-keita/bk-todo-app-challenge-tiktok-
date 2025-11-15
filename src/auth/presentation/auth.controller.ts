import { Router, Request, Response } from "express";
import { LoginValidator, registerSchema, RegisterValidator } from "./auth.validator.ts";

export const authRouter = Router();

authRouter
  .post("/register", (request: Request, response: Response) => {
  const result = registerSchema.safeParse(request.body);
    if(result.success){
        response.json({
      firstname: result.data.firstname,
      lastname: result.data.lastname,
      email: result.data.email,
      password: result.data.password,
      confirmPassword: result.data.confirmPassword,
    })
    }else {
        response.json({error: result.error.flatten()})
    }
  })

  .post("/login", (request: Request, response: Response) => {
    const { email, password }: LoginValidator = request.body;
    response.json({
      email: email,
      password: password,
    });
  });
