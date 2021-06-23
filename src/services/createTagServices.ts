import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/repositories";

interface TagRequest {
    name: string
}

export class CreateTagService {

    async execute({ name }: TagRequest){

        const tagsRepository = getCustomRepository(TagRepositories)

        if (!name){
            throw new Error("Nome ausente")
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name
        })

        if (tagAlreadyExists){
            throw new Error("Tag Previamente Cadastrada")
        }

        const tag = tagsRepository.create({
            name
        })

        await tagsRepository.save(tag)

        return tag   

    }
}
