import { Response, Request, NextFunction } from "express";
import { ProblemModel } from "../models/problem.model";
import { UserModel } from "../models/user.model";
import { generateToken } from "../utils/token";
const { randomString } = require("../utils/randomString");

/**
 * @desc CREATE NEW PROBLEM
 * @route api/problems/create
 */

exports.createProblem = async (req: Request, res: Response) => {
    try {
        const randomSlug = randomString(20);
        const problem = await ProblemModel.create({
            level: req.body.level,
            title: req.body.title,
            description: req.body.description,
            answer: req.body.answer,
            day: req.body.day,
            slug: randomSlug,
        });
        res.status(201).json(problem);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc GET ALL PROBLEMS
 * @route api/problems/all
 */

exports.getProblems = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.find({});
        if (problem) {
            res.status(200).send(problem);
        } else {
            res.status(400).json({
                message: "Problem not found!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc GET SOLVED PROBLEMS
 * @route api/problems/solved
 */

exports.getSolvedProblems = async (req: Request, res: Response) => {
    try {
        // Extract problemId values from req.user.solvedProblems array
        const problemIds = req.user.solvedProblems.map(
            (solvedProblem) => solvedProblem.problemId,
        );

        // Find problems with _id matching the extracted problemIds
        const problems = await ProblemModel.find({
            _id: { $in: problemIds },
        });

        res.status(200).send(problems);
    } catch (error) {
        res.status(400).json({
            message:
                error || "An error occurred while fetching solved problems.",
        });
    }
};

/**
 * @desc GET SINGLE PROBLEM
 * @route api/problems/:slug
 */

exports.getProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findOne(
            { slug: req.params.slug },
            "-answer",
        );
        if (problem) {
            res.status(200).send(problem);
        } else {
            res.status(400).json({
                message: "Problem not found!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc UPDATE SINGLE PROBLEM
 * @route api/problems/update/:id
 */

exports.updateProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findById(req.params.id);
        if (problem) {
            problem.day = req.body.day || problem.day;
            problem.title = req.body.title || problem.title;
            problem.level = req.body.level || problem.level;
            problem.answer = req.body.answer || problem.answer;
            problem.description = req.body.description || problem.description;
            const updatedProblem = await problem.save();
            res.send({ updatedProblem });
        } else {
            res.status(400).json({
                message: "Problem not found!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc DELETE SINGLE PROBLEM
 * @route api/problems/:id
 */

exports.deleteProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findById(req.params.id);
        if (problem) {
            const deletedProblem = await problem.deleteOne();
            res.status(200).send({
                message: "success",
                problem: deletedProblem,
            });
        } else {
            res.status(400).json({
                message: "Problem not found!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

/**
 * @desc SOLVE SINGLE PROBLEM
 * @route api/problems/solveProblems/:id
 */

exports.solveProblem = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id);
        const problem = await ProblemModel.findById(req.body.id);
        if (user) {
            if (
                problem?.answer == req.body.answer &&
                !user.solvedProblems.some(
                    (solvedProblem) => solvedProblem.problemId === req.body.id,
                )
            ) {
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().split("T")[0];
                user.solvedProblems.push({
                    problemId: req.body.id,
                    date: formattedDate,
                });
                const updatedUser = await user.save();
                res.send({
                    _id: updatedUser._id,
                    username: updatedUser.username,
                    email: updatedUser.email,
                    avatar: updatedUser.avatar,
                    isAdmin: updatedUser.isAdmin,
                    solvedProblems: updatedUser.solvedProblems,
                    emailVerified: updatedUser.emailVerified,
                    createdAt: updatedUser.createdAt,
                    currentDay: updatedUser.currentDay,
                    token: generateToken(updatedUser),
                });
            } else {
                res.status(400).json({
                    message: "Answer not correct!",
                });
            }
        } else {
            res.status(404).json({
                message: "User not found!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
