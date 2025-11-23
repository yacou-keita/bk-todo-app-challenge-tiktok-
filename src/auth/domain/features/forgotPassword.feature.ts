import { Command } from "@src/core/utils/command.utils.ts";
import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";
import { Event } from "@src/core/utils/event.util.ts";

export class ForgotPassword implements Command<String> {
  constructor(private readonly repository: AuthRepository) {}

  execute(email: String): Promise<void> {
    const response = this.repository.forgotPassword(email);
    Event.emit("forgotPassword", email);
    return response;
  }
}
