import { RegisterRequest } from "@src/auth/domain/requests/register.request.ts";

export type ResetPasswordRequest = Pick<RegisterRequest,"email" | "password">