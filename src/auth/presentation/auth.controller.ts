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
import { Login } from "@src/auth/domain/features/login.feature.ts";
import { ForgotPassword } from "@src/auth/domain/features/forgotPassword.feature.ts";
import { ResetPassword } from "@src/auth/domain/features/resetPassword.feature.ts";
import { LoginRequest } from "@src/auth/domain/requests/login.request.ts";
import { ResetPasswordRequest } from "@src/auth/domain/requests/ressetPassword.request.ts";

export const authRouter = Router();
const register = new Register(new AuthMongodbRepository());
const login = new Login(new AuthMongodbRepository());
const forgotPassword = new ForgotPassword(new AuthMongodbRepository());
const resetPassword = new ResetPassword(new AuthMongodbRepository());

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
      response.json("user register");
      return;
    }
    response.json(SendError(validator.error.issues as ZodError[]));
  })

  .post("/login", (request: Request, response: Response) => {
    const validator = LoginValidator.safeParse(request.body);
    if (validator.success) {
      login.execute({
        email: validator.data.email,
        password: validator.data.password,
      } as LoginRequest);
      response.json("user logged");
      return;
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  })

  .post("/forgot-password", (request: Request, response: Response) => {
    const validator = ForgotPasswordValidator.safeParse(request.body);
    if (validator.success) {
      forgotPassword.execute(validator.data.email);
      response.json("reset password link sent");
      return;
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  })

  .post("/reset-password", (request: Request, response: Response) => {
    const validator = ResetPasswordValidator.safeParse(request.body);
    if (validator.success) {
      resetPassword.execute({
        email: validator.data.email,
        password: validator.data.password,
      } as ResetPasswordRequest);
      response.json("password reset");
      return;
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
  });
