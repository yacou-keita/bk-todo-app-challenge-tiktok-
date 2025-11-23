import { Command } from "@src/core/utils/command.utils.ts";
import { ResetPasswordRequest } from "@src/auth/domain/requests/ressetPassword.request.ts";
import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";

export class ResetPassword implements Command<ResetPasswordRequest>{
    constructor(private readonly repository:AuthRepository){}

    execute(request: ResetPasswordRequest): Promise<void> {
        return this.repository.resetPassword(request)
    }
}