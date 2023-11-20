import { NextFunction, Request, Response } from "express";
import { generateToken } from "../utils/token";
import { UserModel } from "../models/user";
const bcrypt = require("bcrypt");
const { randomString } = require("../utils/randomString");
const { verifyEmail } = require("../utils/sendEmail");

/**
 * REGISTER
 * api/user/register
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
 * api/user/verify
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

    res.status(200).send({verified});

  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * LOGIN
 * api/user/login
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
 * UPDATE
 * api/user/update
 */

module.exports.Update = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.user._id);
    const username = req.body.username
    const email = req.body.email

    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername && (existingUsername.username !== req.user.username)) {
      return res
        .status(400)
        .json({ message: "This username is already taken!" });
    }

    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail && (existingEmail.email !== req.user.email)) {
      return res
        .status(400)
        .json({ message: "This email is already using!" });
    }

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.avatar = req.body.avatar || user.avatar;
      user.isAdmin = user.isAdmin;
      user.solvedProblems = user.solvedProblems;
      user.emailVerified = user.emailVerified;
      user.verificationToken = user.verificationToken;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        avatar: updatedUser.avatar,
        isAdmin: updatedUser.isAdmin,
        emailVerified: updatedUser.emailVerified,
        verificationToken: updatedUser.verificationToken,
        solvedProblems: updatedUser.solvedProblems,
        token: generateToken(updatedUser),
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
 * CHANGE USER PASSWORD
 * api/user/passwordUpdate
 */

module.exports.PasswordUpdate = async (req: Request, res: Response) => {
  try {
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

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
          .json({ message: "You cannot use your old password!" });
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
}

/**
 * GET ALL USERS
 * api/user/all
 */

module.exports.getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * DELETE SINGLE USER
 * api/user/delete
 */

module.exports.deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id)

    if (user) {
      if (user.isAdmin) {
        return res.status(400).send({ message: 'You can not delete admin account!' })
      }
      const deletedUser = await user.deleteOne()
      res.status(200).json({ deletedUser })
    }
    else {
      return res.status(404).send({ message: 'User not found!' })
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }

}