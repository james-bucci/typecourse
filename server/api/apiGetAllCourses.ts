import { RequestHandler, Request, Response } from "express"
import * as _ from 'lodash';

import { apiOnError, apiOnSuccess, apiOnDatabaseError } from '../api';
import { dbGetAllCourses } from '../persistance';

export const apiGetAllCourses: RequestHandler = function (req: Request, res: Response) {

    dbGetAllCourses()
        .then(_.partial(apiOnSuccess, res))
        .catch(_.partial(apiOnDatabaseError, res))
        .catch(_.partial(apiOnError, res, "Find all courses failed"));

}
