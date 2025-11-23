import { User } from "@src/auth/domain/entities/user.entity.ts";
import { LoginRequest } from "../requests/login.request.ts";
import { ResetPasswordRequest } from "../requests/ressetPassword.request.ts";

export interface AuthRepository {
    resetPassword(request: ResetPasswordRequest): Promise<void>;
    forgotPassword(email:String): Promise<void>;
    login(request: LoginRequest): Promise<User>;
    register(user:User):Promise<void>
}