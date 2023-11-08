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
                solvedProblems: newUser.solvedProblems,
                token: generateToken(newUser)
            });

        next();
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}

module.exports.Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({ message: "All fields are required!" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.send({ message: 'Incorrect password or invalid' })
        }

        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.send({ message: 'Incorrect password or email' })
        }

        res.status(201).send({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
            solvedProblems: user.solvedProblems,
            token: generateToken(user),
        });
        next();

    } catch (error) {
        return res.json({ message: error });
    }
}

module.exports.Update = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id)
        if (user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            user.avatar = req.body.avatar || user.avatar
            const updatedUser = await user.save()
            res.send({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                avatar: updatedUser.avatar,
                token: generateToken(updatedUser),
            })
        }
        else{
            res.json({"message": "user not found!"})
        }
    } catch (error) {
        res.json({ "message": error })
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

