import { NextFunction, Request, Response } from 'express';
import { generateToken } from '../utils/token';
import { UserModel } from '../models/user';
const bcrypt = require('bcrypt');

module.exports.Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const addUser = async (username: string, email: string, password: string, avatar: string) => {
            const user = await UserModel.create({
                username: username,
                email: email,
                password: password,
                avatar: avatar
            })
            return user
        }
        const newUser = await addUser(req.body.username, req.body.email, bcrypt.hashSync(req.body.password, 12), req.body.avatar)
        res
            .status(201)
            .json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                avatar: newUser.avatar,
                isAdmin: newUser.isAdmin,
                token: generateToken(newUser)
            });

        next();
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

module.exports.getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({});
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}
