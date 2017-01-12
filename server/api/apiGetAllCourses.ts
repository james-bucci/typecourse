import { RequestHandler, Request, Response } from "express"

import { apiOnError, apiOnSuccess } from '../api';
import { dbGetAllCourses } from '../persistance';

export const apiGetAllCourses: RequestHandler = function (req: Request, res: Response) {

    dbGetAllCourses()
        .then( (data: any) => apiOnSuccess(res, data) )
        .catch( (err: any) => apiOnError(res, "Find all courses failed", err) );

}
