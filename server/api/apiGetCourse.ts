import { RequestHandler, Request, Response } from "express"

import { apiOnError, apiOnSuccess } from '../api';
import { dbGetCourse } from '../persistance';

export const apiGetCourse: RequestHandler = function (req: Request, res: Response) {

    const courseId = parseInt(req.params.id);

    dbGetCourse(courseId)
        .then( (data: any) => apiOnSuccess(res, data) )
        .catch( (err: any) => apiOnError(res, "Find course failed", err) );

}
