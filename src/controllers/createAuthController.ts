import { Request, Response } from "express-serve-static-core";
import { AuthUserService } from "../services/authUserService";

export class CreateAuthController {

    async handle(request: Request, response: Response){

        const { email, password } = request.body
        const authUserService = new AuthUserService()
        const token = await authUserService.execute({ email, password })

        return response.json({"message": "login efetuado com sucesso", "token": token})

    }

}