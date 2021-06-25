import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { Tag } from "../entities/Tags";
import { Compliment } from "../entities/Compliments";

@EntityRepository(User)
export class UsersRepositories extends Repository<User> {}

@EntityRepository(Tag)
export class TagRepositories extends Repository<Tag>{}

@EntityRepository(Compliment)
export class ComplimentsRepositories extends Repository<Compliment>{}

