import { User } from "@src/auth/domain/entities/user.entity.ts";
import { AuthRepository } from "@src/auth/domain/repositories/auth.repository.ts";
import { LoginRequest } from "@src/auth/domain/requests/login.request.ts";

export class AuthMongodbRepository implements AuthRepository {
    login(request: LoginRequest): Promise<User> {
        console.log("user logged")

        console.log(`email: ${request.email}`)
        console.log(`password: ${request.password}`)
       return Promise.resolve({} as User)
    }
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