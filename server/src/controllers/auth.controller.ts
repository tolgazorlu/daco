import { NextFunction, Request, Response } from "express";
import { generateToken } from "../utils/token";
import { UserModel } from "../models/user.model";
const bcrypt = require("bcrypt");
const { randomString } = require("../utils/randomString");
const { verifyEmail } = require("../services/email/verificationEmail");
const {
    forgotPasswordEmail,
} = require("../services/email/forgotPasswordEmail");

/**
 * @desc Register
 * @route api/auth/register
 */

module.exports.Register = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email, username, password } = req.body;
        const emailToken = randomString(20);
        const existingUser = await UserModel.findOne({ email });
        const existingUsername = await UserModel.findOne({ username });
        if (!email.match(/\S+@\S+\.\S+/)) {
            return res
                .status(400)
                .json({ message: "Email format is invalid!" });
        }
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "This email is already registered!" });
        }
        if (existingUsername) {
            return res
                .status(400)
                .json({ message: "This username is already taken!" });
        }
        if (password.includes(username) || password.includes(email)) {
            return res.status(400).json({
                message: "Password cannot contain your username or email!",
            });
        }

        const addUser = async (
            username: string,
            email: string,
            password: string,
            verificationToken: string,
        ) => {
            const user = await UserModel.create({
                username: username,
                email: email,
                password: password,
                avatar: `https://source.boringavatars.com/beam/120/${username}?square`,
                verificationToken: verificationToken,
            });
            return user;
        };

        const newUser = await addUser(
            req.body.username,
            req.body.email,
            bcrypt.hashSync(req.body.password, 12),
            emailToken,
        );

        const link = `${process.env.EMAIL_LINK}${newUser._id}/verify/${emailToken}`;

        verifyEmail(email, username, link);

        res.status(201).json({
            success: true,
        });
        next();
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc VERIFY
 * @route api/auth/verify
 */

module.exports.Verify = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(400).json({ message: "Link is invalid!" });
        }

        user.emailVerified = true;
        user.verificationToken = "";

        const verified = await user.save();

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc LOGIN
 * @route api/auth/login
 */

module.exports.Login = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "All fields are required!" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Incorrect email or invalid!" });
        }

        if (!user.emailVerified) {
            return res
                .status(400)
                .json({ message: "First, you need to verify your email!" });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res
                .status(400)
                .json({ message: "Incorrect password or invalid!" });
        }

        res.status(201).json({
            username: user.username,
            avatar: user.avatar,
            role: user.role,
            emailVerified: user.emailVerified,
            verificationToken: user.verificationToken,
            solvedProblems: user.solvedProblems,
            currentDay: user.currentDay,
            token: generateToken(user),
            createdAt: user.createdAt,
        });
        next();
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc CHANGE USER PASSWORD
 * @route api/auth/passwordUpdate
 */

module.exports.PasswordUpdate = async (req: Request, res: Response) => {
    try {
        const currentPassword = req.body.currentPassword;
        const newPassword = req.body.newPassword;

        if (
            !newPassword.match(/\d+/g) ||
            !newPassword.match(/[A-Z]+/g) ||
            !newPassword.match(/[a-z]+/g) ||
            newPassword.length < 7
        ) {
            return res.status(400).json({ message: "Choose strong password!" });
        }

        const user = await UserModel.findById(req.user._id);

        if (user) {
            const auth = await bcrypt.compare(currentPassword, user?.password);

            if (!auth) {
                return res
                    .status(400)
                    .json({ message: "Current password is not true!" });
            }

            if (newPassword == currentPassword) {
                return res
                    .status(400)
                    .json({ message: "You cannot use old password!" });
            }

            user.password = bcrypt.hashSync(newPassword, 12);
            const changedPasswordUser = await user.save();
            return res.send({
                _id: changedPasswordUser._id,
                token: generateToken(changedPasswordUser),
            });
        } else {
            return res.status(404).json({ message: "User not found!" });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc DELETE SINGLE USER
 * @route api/auth/delete
 */

module.exports.deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);

        if (user) {
            if (user.role) {
                return res
                    .status(400)
                    .send({ message: "You can not delete admin account!" });
            }
            const deletedUser = await user.deleteOne();
            res.status(200).json({ deletedUser });
        } else {
            return res.status(404).send({ message: "User not found!" });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc FORGOT PASSWORD
 * @route api/auth/forgot-password
 */

module.exports.ForgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).send("User not found.");
        }

        const token = randomString(20);
        user.resetPasswordToken = token;
        user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
        await user.save();

        const resetURL = `${process.env.EMAIL_LINK}reset-password/${token}`;

        forgotPasswordEmail(email, resetURL);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc RESET PASSWORD
 * @route api/auth/reset-password
 */

module.exports.ResetPassword = async (req: Request, res: Response) => {
    try {
        const { token, password } = req.body;
        const user = await UserModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res
                .status(400)
                .send("Password reset token is invalid or has expired.");
        }

        (user.password = bcrypt.hashSync(req.body.password, 12)),
            (user.resetPasswordToken = undefined);
        user.resetPasswordExpires = undefined;
        await user.save();

        res.send("Your password has been updated.");
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
