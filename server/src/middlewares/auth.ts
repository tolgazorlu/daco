import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

/**
 *
 * @desc AUTHENTICATION
 */

export const Auth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer xxxxx
        const decode = jwt.verify(
            token,
            process.env.TOKEN_KEY || "somethingsecret",
        );
        req.user = decode as {
            _id: string;
            username: string;
            email: string;
            avatar: string;
            role: string;
            emailVerified: boolean;
            verificationToken: string;
            solvedProblems: {
                problemId: string;
                date: string;
            }[];
            token: string;
            currentDay: number;
            createdAt: Date;
        };
        next();
    } else {
        res.status(401).json({ message: "No Token" });
    }
};
