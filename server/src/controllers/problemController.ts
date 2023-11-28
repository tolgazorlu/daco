import { Response, Request, NextFunction } from "express";
import { ProblemModel } from "../models/problem";
import { day } from "../utils/dailySchedule";
import { UserModel } from "../models/user";
import { generateToken } from "../utils/token";

/**
 * CREATE NEW PROBLEM
 * api/problems/create
 */

exports.createProblem = async (req: Request, res: Response) => {
  try {
    const problem = await ProblemModel.create({
      sequence: req.body.sequence,
      slug: req.body.slug,
      level: req.body.level,
      title: req.body.title,
      description: req.body.description,
      example: req.body.example,
      constrain: req.body.constrain,
      answer: req.body.answer,
      day: req.body.day,
      date: req.body.date,
    });
    res.status(201).json(problem);
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * GET ALL PROBLEMS
 * api/problems/all
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
 * GET SOLVED PROBLEMS
 * api/problems/solved
 */

exports.getSolvedProblems = async (req: Request, res: Response) => {
  try {
    const problem = await ProblemModel.find({
      _id: { $in: req.user.solvedProblems },
    });
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
 * GET DAILY PROBLEMS
 * api/problems/daily
 */

exports.getDailyProblems = async (req: Request, res: Response) => {
  try {
    const problem = await ProblemModel.find({ day: day }, "-answer");
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
 * GET SINGLE PROBLEM
 * api/problems/:slug
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
 * UPDATE SINGLE PROBLEM
 * api/problems/update/:id
 */

exports.updateProblem = async (req: Request, res: Response) => {
  try {
    const problem = await ProblemModel.findById(req.params.id);
    if (problem) {
      problem.day = req.body.day || problem.day;
      problem.date = req.body.date || problem.date;
      problem.title = req.body.title || problem.title;
      problem.slug = req.body.slug || problem.slug;
      problem.sequence = req.body.sequence || problem.sequence;
      problem.level = req.body.level || problem.level;
      problem.example = req.body.example || problem.example;
      problem.constrain = req.body.constrain || problem.constrain;
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
 * DELETE SINGLE PROBLEM
 * api/problems/:id
 */

exports.deleteProblem = async (req: Request, res: Response) => {
  try {
    const problem = await ProblemModel.findById(req.params.id);
    if (problem) {
      const deletedProblem = await problem.deleteOne();
      res.status(200).send({ message: "success", problem: deletedProblem });
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
 * SOLVE SINGLE PROBLEM
 * api/problems/solveProblems/:id
 */

exports.solveProblem = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.user._id);
    const problem = await ProblemModel.findById(req.body.id);
    if (user) {
      if (
        problem?.answer == req.body.answer &&
        !user.solvedProblems?.includes(req.body.id)
      ) {
        await user.solvedProblems?.push(req.params.id);
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.avatar = req.body.avatar || user.avatar;
        user.isAdmin = user.isAdmin;
        user.solvedProblems = user.solvedProblems;
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          avatar: updatedUser.avatar,
          isAdmin: updatedUser.isAdmin,
          solvedProblems: updatedUser.solvedProblems,
          emailVerified: updatedUser.emailVerified,
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

/**
 * GET STATISTICS
 * api/problems/dashboardStatistics
 */

exports.getStatistics = async (req: Request, res: Response) => {
  try {
    const countProblems = await ProblemModel.countDocuments();
    const totalUsers = await UserModel.countDocuments();
    res.status(200).send({ countProblems, totalUsers });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * GET MINI STATISTICS
 * api/problems/dashboardMiniStatistics
 */

exports.getMiniStatistics = async (req: Request, res: Response) => {
  try {
    const lastProblem = await ProblemModel.findOne()
      .sort({ $natural: -1 })
      .limit(1);
    const day = lastProblem?.day;
    const date = lastProblem?.date;
    res.status(200).send({ day, date });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
