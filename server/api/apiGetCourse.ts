import { RequestHandler, Request, Response } from "express"
import * as _ from 'lodash';

import { apiOnError, apiOnSuccess, apiOnDatabaseError } from '../api';
import { dbGetCourse } from '../persistance';

export const apiGetCourse: RequestHandler = function (req: Request, res: Response) {

    const courseId = parseInt(req.params.id);

    dbGetCourse(courseId)
        .then(_.partial(apiOnSuccess, res))
        .catch(_.partial(apiOnDatabaseError, res))
        .catch(_.partial(apiOnError, res, "Get course failed"));

}
