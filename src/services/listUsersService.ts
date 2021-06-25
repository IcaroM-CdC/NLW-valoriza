import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/repositories"

export class ListUsersService {

    async execute(){

        const usersRepositories = getCustomRepository(UsersRepositories)
        const users = await usersRepositories.find()

        return users

    }
}