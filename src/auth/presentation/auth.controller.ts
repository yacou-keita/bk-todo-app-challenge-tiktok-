import { Router, Request, Response } from "express";
import {
  ForgotPasswordValidator,
  LoginValidator,
  RegisterValidator,
  ResetPasswordValidator,
} from "@src/auth/presentation/auth.validator.ts";
import { SendError, ZodError } from "@src/core/utils/sendError.util.ts";
import { Register } from "@src/auth/domain/features/register.feature.ts";
import { AuthMongodbRepository } from "@src/auth/datasource/mongodb/auth.mongodb.ts";
import { User } from "@src/auth/domain/entities/user.entity.ts";

export const authRouter = Router();
const register = new Register(new AuthMongodbRepository());

authRouter
  .post("/register", (request: Request, response: Response) => {
    const validator = RegisterValidator.safeParse(request.body);

    if (validator.success) {
      register.execute(
        User.createAccount({
          email: validator.data.email,
          firstname: validator.data.firstname,
          lastname: validator.data.lastname,
          password: validator.data.password,
        })
      );
      response.json("user register")
      return
    } 
      response.json(SendError(validator.error.issues as ZodError[]));
  })

  .post("/login", (request: Request, response: Response) => {
    const validator = LoginValidator.safeParse(request.body);
    if (validator.success) {
      response.json({
        email: validator.data.email,
        password: validator.data.password,
      });
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  })

  .post("/forgot-password", (request: Request, response: Response) => {
    const validator = ForgotPasswordValidator.safeParse(request.body);
    if (validator.success) {
      response.json({
        email: validator.data.email,
      });
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  })

  .post("/reset-password", (request: Request, response: Response) => {
    const validator = ResetPasswordValidator.safeParse(request.body);
    if (validator.success) {
      response.json({
        email: validator.data.email,
        password: validator.data.password,
        confirmPassword: validator.data.confirmPassword,
      });
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  });
