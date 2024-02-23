import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { generateToken } from "../utils/token";
import { uploadFile } from "../services/s3/uploadImage";

const { getFileStream } = require("../services/s3/downloadImage");


const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

/**
 * UPDATE
 * api/user/update
 */


module.exports.Update = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.user._id);
      const username = req.body.username;
      const email = req.body.email;
  
      const existingUsername = await UserModel.findOne({ username });
      if (existingUsername && existingUsername.username !== req.user.username) {
        return res
          .status(400)
          .json({ message: "This username is already taken!" });
      }
  
      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail && existingEmail.email !== req.user.email) {
        return res.status(400).json({ message: "This email is already using!" });
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
 * UPLOAD USER AVATAR TO S3 BUCKET
 * api/user/images
 */

module.exports.UploadImage = async (req: Request, res: Response) => {
    try {
      const file = req.file;
      await uploadFile(file);
      await unlinkFile(file.path);
      const path = file.path.split("/")[1];
      return res.send({ imagePath: `/images/${path}` });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  };
  
  /**
   * GET USER AVATAR FROM S3 BUCKET
   * api/user/images/:key
   */
  
  module.exports.GetImageFromS3 = async (req: Request, res: Response) => {
    if (req.params.key) {
      const key = req.params.key;
      getFileStream(key).then((data: any) => data.Body.pipe(res));
    }
  };
  