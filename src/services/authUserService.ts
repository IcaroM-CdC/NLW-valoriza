import { getCustomRepository } from "typeorm"
import { UsersRepositories} from "../repositories/repositories";
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"

const md5hash = "ffdea0c3bed13906e0d6e9a59a4a6909"


interface AuthRequest {
    email: string,
    password: string,
    
}

export class AuthUserService {

    async execute({email, password}: AuthRequest){

        const usersRepository = getCustomRepository(UsersRepositories)

        // Verifica se o email existe

        const userExists = await usersRepository.findOne({
            email
        })

        if (!userExists){
            throw new Error("Email ou senha incorreto")
        }

        // Verifica se a senha está correta

        const paswordMatch = await compare(password, userExists.password)

        if (!paswordMatch){
            throw new Error("Email ou senha incorreto")
        }

        // md5hash = o rato roeu a roupa do rei de roma

        // gera o token

        const token = sign({ email: userExists.email, name: userExists.name }, md5hash, {subject: userExists.id, expiresIn: "1d"})
 
        return token
    }

}