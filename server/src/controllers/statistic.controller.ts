import { Response, Request } from "express";
// import { day, todaysDate } from "../utils/schedule";

/**
 * GET STATISTICS
 * api/statistic/totalProblems
 */

import { ProblemModel } from "../models/problem.model";
import { UserModel } from "../models/user.model";

exports.getTotalProblemStat = async (req: Request, res: Response) => {
  try {
    const countProblems = await ProblemModel.countDocuments();
    res.status(200).send({ countProblems });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * GET STATISTICS
 * api/statistic/totalUsers
 */

exports.getTotalUserStat = async (req: Request, res: Response) => {
  try {
    const totalUsers = await UserModel.countDocuments();
    res.status(200).send({ totalUsers });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

/**
 * GET STATISTICS
 * api/statistic/day
 */

// exports.getDayStat = async (req: Request, res: Response) => {
//   try {
//     res.status(200).send({ day, todaysDate });
//   } catch (error) {
//     res.status(400).json({
//       message: error,
//     });
//   }
// };

// exports.getTodaysUsersStat = async (req: Request, res: Response) => {
//   try {
//     const users = await UserModel.find({ createdAt: todaysDate });
//     const todaysUsers = users.length;
//     res.status(200).send({ todaysUsers });
//   } catch (error) {
//     res.status(400).json({
//       message: error,
//     });
//   }
// };
