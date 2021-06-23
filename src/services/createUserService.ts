import { getCustomRepository } from "typeorm"
import { UsersRepositories} from "../repositories/repositories";

interface UserRequest {
    name: string
    email: string
    admin?: boolean 
}

export class CreateUserService {

    async execute({ name, email, admin }: UserRequest){

        const usersRepository = getCustomRepository(UsersRepositories)

        // Caso o email não esteja presente
        if (!email){
            throw new Error("Email incorreto")
        }

        // Caso o usuário ja exista retornamos um erro
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if (userAlreadyExists){
            throw new Error("Usuário existente")
        }

        const user = usersRepository.create({
            name,
            email,
            admin 
        })

        await usersRepository.save(user)

        return user

    }

}