import { NextFunction, Request, Response } from "express";
import { generateToken } from "../utils/token";
import { UserModel } from "../models/user.model";
import { uploadFile } from "../services/s3/uploadImage";
const bcrypt = require("bcrypt");
const { randomString } = require("../utils/randomString");
const { verifyEmail } = require("../services/email/verificationEmail");
const { getFileStream } = require("../services/s3/downloadImage");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

/**
 * REGISTER
 * api/auth/register
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
      return res.status(400).json({ message: "Email format is invalid!" });
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
      return res
        .status(400)
        .json({ message: "Password cannot contain your username or email!" });
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
        avatar: `https://source.boringavatars.com/pixel/120/${username}?square`,
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

    const link = `http://localhost:5173/${newUser._id}/verify/${emailToken}`;

    verifyEmail(email, username, link);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      isAdmin: newUser.isAdmin,
      emailVerified: newUser.emailVerified,
      verificationToken: newUser.verificationToken,
      solvedProblems: newUser.solvedProblems,
      token: generateToken(newUser),
    });
    next();
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * VERIFY
 * api/auth/verify
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

    res.status(200).send({ verified });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * LOGIN
 * api/auth/login
 */

module.exports.Login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or invalid!" });
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
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
      emailVerified: user.emailVerified,
      verificationToken: user.verificationToken,
      solvedProblems: user.solvedProblems,
      token: generateToken(user),
    });
    next();
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};




/**
 * CHANGE USER PASSWORD
 * api/auth/passwordUpdate
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
 * DELETE SINGLE USER
 * api/auth/delete
 */

module.exports.deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (user) {
      if (user.isAdmin) {
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
