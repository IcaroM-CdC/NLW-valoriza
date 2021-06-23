import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User"
import { Tag } from "../entities/Tags";

@EntityRepository(User)
export class UsersRepositories extends Repository<User> {}

@EntityRepository(Tag)
export class TagRepositories extends Repository<Tag>{}