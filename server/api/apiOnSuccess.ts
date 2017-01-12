import { Response } from "express"

export function apiOnSuccess(res: Response, payload: any) {

    res.status(200).json({payload}) 

}