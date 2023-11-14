
import { NextFunction, Request, Response } from 'express';
import { generateToken } from '../utils/token';
import { UserModel } from '../models/user';
const bcrypt = require('bcrypt');
const { randomString } = require("../utils/randomString")
const { verifyEmail } = require("../utils/sendEmail")

/**
 * REGISTER
 * api/user/register
 */

module.exports.Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, username, password } = req.body
        const emailToken = randomString(20)
        const existingUser = await UserModel.findOne({ email })
        const existingUsername = await UserModel.findOne({ username })
        if (!email.match(/\S+@\S+\.\S+/)) {
            return res.status(400).json({ message: 'Email format is invalid!' });
        }
        if (existingUser) {
            return res.status(400).json({ message: 'This email is already registered!' });
        }
        if (existingUsername) {
            return res.status(400).json({ message: 'This username is already taken!' });
        }
        if (password.includes(username) || password.includes(email)) {
            return res.status(400).json({ message: 'Password cannot contain your username or email!' });
        }

        const addUser = async (username: string, email: string, password: string, verificationToken: string) => {
            const user = await UserModel.create({
                username: username,
                email: email,
                password: password,
                avatar: `https://source.boringavatars.com/pixel/120/${username}?square`,
                verificationToken: verificationToken,
            })
            return user
        }

        const link = `http://localhost:8000/api/user/verify?code=${emailToken}`

        verifyEmail(email, username, link)

        const newUser = await addUser(req.body.username, req.body.email, bcrypt.hashSync(req.body.password, 12), emailToken)
        res
            .status(201)
            .json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                avatar: newUser.avatar,
                isAdmin: newUser.isAdmin,
                emailVerified: newUser.emailVerified,
                verificationToken: newUser.verificationToken,
                solvedProblems: newUser.solvedProblems,
                token: generateToken(newUser)
            });
        next();
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

/**
 * VERIFY
 * api/user/verify
 */

module.exports.Verify = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { code } = req.query
        const user = await UserModel.findOne({ verificationToken: code })

        if (!user) {
            return res.status(400).json({ message: 'Code is Invalid' });
        }

        user.emailVerified = true;
        user.verificationToken = "";

        const verified = await user.save()

        res.status(200).json({
            verified
        })

        next();

    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

/**
 * LOGIN
 * api/user/login
 */

module.exports.Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send({ message: "All fields are required!" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.send({ message: 'Incorrect password or invalid!' })
        }

        if (!user.emailVerified) {
            return res.send({ message: 'First, you need to verify your email!' })
        }

        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.send({ message: 'Incorrect password or email!' })
        }

        res.status(201).send({
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            isAdmin: user.isAdmin,
            emailVerified: user.emailVerified,
            verificationToken: user.verificationToken,
            solvedProblems: user.solvedProblems,
            token: generateToken(user)
        });
        next();

    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

/**
 * UPDATE
 * api/user/update
 */

module.exports.Update = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id)
        if (user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            user.avatar = req.body.avatar || user.avatar
            user.isAdmin = user.isAdmin
            user.solvedProblems = user.solvedProblems
            user.emailVerified = user.emailVerified
            user.verificationToken = user.verificationToken
            const updatedUser = await user.save()
            res.send({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                avatar: updatedUser.avatar,
                isAdmin: updatedUser.isAdmin,
                emailVerified: updatedUser.emailVerified,
                verificationToken: updatedUser.verificationToken,
                solvedProblems: updatedUser.solvedProblems,
                token: generateToken(updatedUser)
            })
        }
        else {
            res.json({ "message": "user not found!" })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

/**
 * GET ALL USERS
 * api/user/all
 */

module.exports.getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({});
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

