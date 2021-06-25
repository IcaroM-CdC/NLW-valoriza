import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/repositories"

export class ListTagsService {

    async execute(){

        const tagsRepositories = getCustomRepository(TagRepositories)
        const tags = await tagsRepositories.find()

        return tags
    }

}