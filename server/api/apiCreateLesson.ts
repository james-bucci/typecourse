import { RequestHandler, Request, Response } from "express"

import { apiOnError, apiOnSuccess } from '../api';
import { dbCreateLesson } from '../persistance';

export const apiCreateLesson: RequestHandler = function (req: Request, res: Response) {

    dbCreateLesson(req.body)
        .then( (data: any) => apiOnSuccess(res, data) )
        .catch( err => console.error("ERROR OCCURRED", err))
        .catch( (err: any) => apiOnError(res, "Could not create lessons", err) );

}

