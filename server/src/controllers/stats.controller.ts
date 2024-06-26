import { Response, Request } from "express";
// import { day, todaysDate } from "../utils/schedule";

/**
 * @desc GET STATISTICS
 * @route api/statistic/totalProblems
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
 * @desc GET STATISTICS
 * @route api/statistic/totalUsers
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
