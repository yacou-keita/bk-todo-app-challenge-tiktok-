import { SendEmail } from "@src/auth/domain/features/sendEmail.feature.ts";
import { Event } from "@src/core/utils/event.util.ts";

export class SendForgotPasswordLink implements SendEmail<String>{
    
    constructor(){
        Event.on("forgotPassword",(email) => {this.execute(email)})
    }

    execute(email:String): Promise<void> {
        console.log(`reset email(${email}) sent`)
        return Promise.resolve()
    }
}