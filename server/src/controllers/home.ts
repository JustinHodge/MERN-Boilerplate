import { NextFunction, Request, Response } from 'express';

export const getHome = (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Welcome Home!' });
};
