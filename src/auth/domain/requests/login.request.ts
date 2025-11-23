import { RegisterRequest } from "@src/auth/domain/requests/register.request.ts";

export type LoginRequest = Pick<RegisterRequest,"email" | "password">

