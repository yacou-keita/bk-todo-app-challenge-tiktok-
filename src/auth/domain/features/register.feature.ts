import { User } from "@src/auth/domain/entities/user.entity.ts";
import { AuthRepository } from "../repositories/auth.repository.ts";

export class Register {
    constructor(private readonly repository:AuthRepository){}
    execute(user:User){
        this.repository.register(user)
    }
}