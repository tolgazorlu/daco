import chalk from "chalk"
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (authorization) {
        const token = authorization.slice(7, authorization.length) // Bearer xxxxx
        console.log(chalk.bgYellow(token))
        const decode = jwt.verify(
            token,
            process.env.TOKEN_KEY || 'somethingsecret'
        )
        req.user = decode as {
            _id: string
            username: string
            email: string
            avatar: string
            isAdmin: boolean
            solvedProblems: string[]
            token: string
        }
        next()
    } else {
        res.status(401).json({ message: 'No Token' })
    }
}