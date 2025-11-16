import { Router, Request, Response } from "express";
import {
  ForgotPasswordValidator,
  LoginValidator,
  RegisterValidator,
  ResetPasswordValidator,
} from "@src/auth/presentation/auth.validator.ts";
import { SendError, ZodError } from "@src/core/utils/sendError.util.ts";

export const authRouter = Router();

authRouter
  .post("/register", (request: Request, response: Response) => {
    const validator = RegisterValidator.safeParse(request.body);
    if (validator.success) {
      response.json({
        firstname: validator.data.firstname,
        lastname: validator.data.lastname,
        email: validator.data.email,
        password: validator.data.password,
        confirmPassword: validator.data.confirmPassword,
      });
    } else {
      response.json(SendError(validator.error.issues as ZodError[]));
    }
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
