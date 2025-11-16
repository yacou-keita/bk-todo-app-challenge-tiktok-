import { User } from "@src/auth/domain/entities/user.entity.ts";
import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";

export class AuthMongodbRepository implements AuthRepository {
    register(user: User): Promise<void> {
        console.log("user save")
        console.log(`id: ${user.toDataBase().id}`)
        console.log(`firstname: ${user.toDataBase().firstname}`)
        console.log(`lastname: ${user.toDataBase().lastname}`)
        console.log(`email: ${user.toDataBase().email}`)
        console.log(`password: ${user.toDataBase().password}`)
       return Promise.resolve()
    }

}