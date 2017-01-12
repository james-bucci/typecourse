
import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

export let apiErrorHandler : ErrorRequestHandler;

apiErrorHandler = function (err: any, req: Request, res: Response, next: NextFunction) {

    console.error('API error handler triggered');

    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal Server Error'
    })

} 