import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/createComplimentService';

export class CreateComplimentController {

    async handle(request: Request, response: Response){

        const user_sender = request.user_id
        const { tag_id, user_receiver, message } = request.body
        const createComplimentService = new CreateComplimentService()
        const compliment = await createComplimentService.execute({tag_id, user_receiver, user_sender, message})
        
        return response.json(compliment)
    }
}