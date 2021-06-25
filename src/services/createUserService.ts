import { getCustomRepository } from "typeorm"
import { UsersRepositories} from "../repositories/repositories";
import { hash } from "bcryptjs"

interface UserRequest {
    name: string
    email: string
    password: string
    admin?: boolean 
}

export class CreateUserService {

    async execute({ name, email, password, admin }: UserRequest){

        const usersRepository = getCustomRepository(UsersRepositories)

        // Caso o email não esteja presente
        if (!email){
            throw new Error("Email ausente")
        }

        if (!password){
            throw new Error("Senha ausente")
        }

        if (!admin){
            admin = false
        }

        // Caso o usuário ja exista retornamos um erro
        const userAlreadyExists = await usersRepository.findOne({
            email: email
        })

        if (userAlreadyExists){
            throw new Error("Usuário existente")
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name: name,
            email: email,
            password: passwordHash,
            admin: admin 
        })

        await usersRepository.save(user)

        return user

    }

}