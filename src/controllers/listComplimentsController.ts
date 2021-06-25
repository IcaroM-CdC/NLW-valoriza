import { Request, Response } from 'express';
import { ListReceivedComplimentService } from '../services/listUserReceivedComplimentsService';
import { ListSendComplimentService } from '../services/listUserSendComplimentsService';

export class ListSendComplimentController {

    async handle(request: Request, response: Response){

        const {user_id} = request
        const listSendComplimentService =  new ListSendComplimentService()
        const compliments = await listSendComplimentService.execute(user_id)

        return response.json(compliments)

    }
}

export class ListReceivedComplimentController {

    async handle(request: Request, response: Response){

        const {user_id} = request
        const listReceivedComplimentService =  new ListReceivedComplimentService()
        const compliments = await listReceivedComplimentService.execute(user_id)

        return response.json(compliments)

    }
}