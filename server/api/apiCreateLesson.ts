import { RequestHandler, Request, Response } from "express"
import * as _ from 'lodash';

import { apiOnError, apiOnSuccess, apiOnDatabaseError } from '../api';
import { dbCreateLesson } from '../persistance';

export const apiCreateLesson: RequestHandler = function (req: Request, res: Response) {

    dbCreateLesson(req.body)
        .then(_.partial(apiOnSuccess, res))
        .catch(_.partial(apiOnDatabaseError, res))
        .catch(_.partial(apiOnError, res, "Create lesson failed"));

}

