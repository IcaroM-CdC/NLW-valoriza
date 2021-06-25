import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/repositories"

export class ListReceivedComplimentService {

    async execute(user_id: string){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        if (!compliments){
            throw new Error("Usuário sem elogios recebidos")
        }

        return compliments
    }
}