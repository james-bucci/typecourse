import { RequestHandler, Request, Response } from "express"
import * as _ from 'lodash';

import { apiOnError, apiOnSuccess, apiOnDatabaseError } from '../api';
import { dbUpdateLesson } from '../persistance';

export const apiPatchLesson: RequestHandler = function (req: Request, res: Response) {

    const lessonId = parseInt(req.params.id);

    dbUpdateLesson(lessonId, req.body)
        .then(_.partial(apiOnSuccess, res))
        .catch(_.partial(apiOnDatabaseError, res))
        .catch(_.partial(apiOnError, res, "Update lesson failed"));

}

