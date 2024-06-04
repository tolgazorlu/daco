import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { generateToken } from "../utils/token";
import { uploadFile } from "../services/s3/uploadImage";
import { ProblemModel } from "../models/problem.model";

const { getFileStream } = require("../services/s3/downloadImage");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

/**
 * @desc UPDATE USER
 * @route api/user/update
 */

module.exports.Update = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id);
        const username = req.body.username;
        const email = req.body.email;

        const existingUsername = await UserModel.findOne({ username });
        if (
            existingUsername &&
            existingUsername.username !== req.user.username
        ) {
            return res
                .status(400)
                .json({ message: "This username is already taken!" });
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail && existingEmail.email !== req.user.email) {
            return res
                .status(400)
                .json({ message: "This email is already using!" });
        }

        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.avatar = req.body.avatar || user.avatar;
            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                avatar: updatedUser.avatar,
                role: updatedUser.role,
                emailVerified: updatedUser.emailVerified,
                verificationToken: updatedUser.verificationToken,
                solvedProblems: updatedUser.solvedProblems,
                currentDay: updatedUser.currentDay,
                createdAt: updatedUser.createdAt,
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
 * @desc GET ALL USERS
 * @route api/user/all
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
 * @desc GET USER DAILY PROBLEMS
 * @route api/user/dailyProblems
 */

module.exports.GetUserDailyProblems = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id);
        if (user) {
            const problems = await ProblemModel.find(
                { day: user.currentDay },
                "-answer",
            );
            res.status(200).send(problems);
        } else {
            const problems = await ProblemModel.find({ day: 1 }, "-answer");
            res.status(200).send(problems);
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc GET USER PROBLEMS SO FAR
 * @route api/user/allProblems
 */

module.exports.GetUserProblemsSoFar = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id);
        let pipeline = [];

        if (user) {
            pipeline.push({
                $match: {
                    day: { $lte: user.currentDay },
                    isDraft: false,
                },
            });
        }

        pipeline.push({
            $group: {
                _id: "$day",
                problems: {
                    $push: {
                        _id: "$_id",
                        day: "$day",
                        level: "$level",
                        slug: "$slug",
                        title: "$title",
                        isDraft: "$isDraft",
                    },
                },
            },
        });

        const groupedProblems = await ProblemModel.aggregate(pipeline);

        res.status(200).send(groupedProblems);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc UPLOAD USER AVATAR TO S3 BUCKET
 * @route api/user/images
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
 * @desc GET USER AVATAR FROM S3 BUCKET
 * @route api/user/images/:key
 */

module.exports.GetImageFromS3 = async (req: Request, res: Response) => {
    if (req.params.key) {
        const key = req.params.key;
        getFileStream(key).then((data: any) => data.Body.pipe(res));
    }
};
