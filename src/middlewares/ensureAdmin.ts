import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/repositories";
import { getCustomRepository } from "typeorm";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    /* 
        Realizando uma busca no banco de dados para conferir se o ID passado no parametro 
        é mesmo de um usuário com permissão de admninistrador
    */
    const { user_id } = request

    const usersRepositories = getCustomRepository(UsersRepositories)
    const user = await usersRepositories.findOne(user_id)

    const admin = user?.admin


    if (admin){
        return next()
    }

    else {
        return response.status(401).json({
            error: "Usuário sem permissão"
        })
    }
    
}