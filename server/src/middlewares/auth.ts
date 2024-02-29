import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

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
      isAdmin: boolean;
      emailVerified: boolean;
      verificationToken: string;
      solvedProblems: string[];
      token: string;
      currentDay: number;
    };
    next();
  } else {
    res.status(401).json({ message: "No Token" });
  }
};
