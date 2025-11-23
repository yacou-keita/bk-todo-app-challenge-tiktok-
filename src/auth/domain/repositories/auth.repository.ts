import { User } from "@src/auth/domain/entities/user.entity.ts";
import { LoginRequest } from "../requests/login.request.ts";

export interface AuthRepository {
    login(request: LoginRequest): Promise<User>;
    register(user:User):Promise<void>
}