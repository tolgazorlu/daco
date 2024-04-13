require("dotenv").config();
const jwt = require("jsonwebtoken");
import { User } from "../models/user.model";

/**
 *
 * @desc GENERATE TOKEN
 */

export const generateToken = (user: User) => {
    return jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            solvedProblems: user.solvedProblems,
        },
        process.env.TOKEN_KEY || "somethingsecret",
        {
            expiresIn: "30d",
        },
    );
};
