require('dotenv').config();
const jwt = require('jsonwebtoken')
import { User } from '../models/user'

export const generateToken = (user: User) => {
    return jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.TOKEN_KEY || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    )
}