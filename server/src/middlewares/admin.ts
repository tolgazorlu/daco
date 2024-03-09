import { NextFunction, Request, Response } from "express";

/**
 *
 * @desc ADMIN
 */

export const Admin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: "Invalid Admin Token" });
    }
};
