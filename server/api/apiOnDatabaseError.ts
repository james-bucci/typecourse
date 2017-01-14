import { Response } from "express"

const hri = require('human-readable-ids').hri;

export function apiOnDatabaseError(res: Response, err: any) {

    const errorId = hri.random();
    
    console.error(`Database error occurred, `, errorId, err);
    
    res.status(500).json({
        errorCode: 'ERR-002',
        message: `An error with code (${errorId}) occurred. Please contact techical support`
    })
}