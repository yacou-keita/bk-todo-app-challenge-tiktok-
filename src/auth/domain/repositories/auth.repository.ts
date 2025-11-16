import { User } from "@src/auth/domain/entities/user.entity.ts";

export interface AuthRepository {
    register(user:User):Promise<void>
}