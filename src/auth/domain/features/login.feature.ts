import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";
import { LoginRequest } from "@src/auth/domain/requests/login.request.ts";
import { Query } from "@src/core/utils/query.utils.ts";
import { User } from "@src/auth/domain/entities/user.entity.ts";

export class Login implements Query<User,LoginRequest> {

    constructor(private repository:AuthRepository){}

    execute(request: LoginRequest): Promise<User> {
        return this.repository.login(request)
    }
}