import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"
import { privateKey } from "../services/authUserService"; 

interface Payload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).json({message: "token ausente"})
    }

    const [bearerWord, token] = authToken.split(" ")

    try {

        /* SUB FAZ PARTE DO CORPO DA REQUISIÇÃO, SE REFERE AO ID DO USUÁRIO */

        const verified = verify(token, privateKey) as Payload
        console.log(verified)
        request.user_id = verified.sub

    }catch(err) {
        return response.status(401).json({message: "acesso negado"})
    }

    return next()

}