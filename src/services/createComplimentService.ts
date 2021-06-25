import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories, UsersRepositories } from "../repositories/repositories"


interface ComplimentRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

export class CreateComplimentService {

    async execute({ tag_id, user_sender, user_receiver, message }: ComplimentRequest){

        const complimentRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories)

        const userReceiverExists = await usersRepositories.findOne(user_receiver)

        if (!userReceiverExists){
            throw new Error("Destinatário inválido")
        }

        if (user_sender === user_receiver){
            throw new Error("O emissor não pode ser o mesmo usuário receptor")
        }

        const compliment = complimentRepositories.create({
            tag_id: tag_id,
            user_receiver: user_receiver,
            user_sender: user_sender,
            message: message
        })

        await complimentRepositories.save(compliment)

        return compliment
    }
}