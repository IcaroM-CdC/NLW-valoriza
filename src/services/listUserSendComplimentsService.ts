import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/repositories"

export class ListSendComplimentService {

    async execute(user_id: string){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        if (!compliments){
            throw new Error("Usuário sem elogios enviados")
        }

        return compliments
    }
}