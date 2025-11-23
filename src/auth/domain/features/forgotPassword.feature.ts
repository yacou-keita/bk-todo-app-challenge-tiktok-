import { Command } from "@src/core/utils/command.utils.ts";
import { AuthRepository } from "../repositories/auth.repository.ts";

export class ForgotPassword implements Command<String> {
    constructor(private readonly repository:AuthRepository){}

    execute(email: String): Promise<void> {
        return this.repository.forgotPassword(email)
    }

}