import { RequestHandler, Request, Response } from "express"
import * as _ from 'lodash';

import { apiOnError, apiOnSuccess, apiOnDatabaseError } from '../api';
import { dbDeleteLesson } from '../persistance';

export const apiDeleteLesson: RequestHandler = function (req: Request, res: Response) {

    const lessonId = parseInt(req.params.id);

    dbDeleteLesson(lessonId)
        .then(_.partial(apiOnSuccess, res))
        .catch(_.partial(apiOnDatabaseError, res))
        .catch(_.partial(apiOnError, res, "Delete lesson failed"));

}

