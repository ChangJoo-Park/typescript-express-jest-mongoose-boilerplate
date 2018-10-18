import { NextFunction, Request, Response } from "express";

export const get = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json([]);
};
