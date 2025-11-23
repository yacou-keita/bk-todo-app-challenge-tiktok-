import { User } from "@src/auth/domain/entities/user.entity.ts";
import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";
import { Command } from "@src/core/utils/command.utils.ts";

export class Register implements Command<User> {
    constructor(private readonly repository:AuthRepository){}
    execute(user:User){
       return this.repository.register(user)
    }
}