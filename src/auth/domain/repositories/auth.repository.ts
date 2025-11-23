import { User } from "@src/auth/domain/entities/user.entity.ts";
import { LoginRequest } from "../requests/login.request.ts";

export interface AuthRepository {
    forgotPassword(email:String): Promise<void>;
    login(request: LoginRequest): Promise<User>;
    register(user:User):Promise<void>
}