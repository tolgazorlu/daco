import { Response, Request, NextFunction } from 'express'
import { ProblemModel } from '../models/problem'
import { daily } from '../utils/daily'
import { UserModel } from '../models/user'

exports.createProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.create(
            {
                sequence: req.body.sequence,
                slug: req.body.slug,
                level: req.body.level,
                title: req.body.title,
                description: req.body.description,
                example: req.body.example,
                constrain: req.body.constrain,
                answer: req.body.answer,
                day: req.body.day,
                date: req.body.date
            }
        )
        res.status(201).json(problem)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getProblems = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.find({})
        if (problem) {
            res.status(200).send(problem)
        }
        else {
            res.status(404).send('Problem not found!')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getDailyProblems = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.find({ day: daily })
        if (problem) {
            res.status(200).send(problem)
        }
        else {
            res.status(404).send('Problem not found!')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findOne({ slug: req.params.slug })
        if (problem) {
            res.status(200).send(problem)
        }
        else {
            res.status(404).send('Problem not found!')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findById(req.params.id)
        if (problem) {
            problem.day = req.body.day || problem.day
            problem.date = req.body.date || problem.date
            problem.title = req.body.title || problem.title
            problem.slug = req.body.slug || problem.slug
            problem.sequence = req.body.sequence || problem.sequence
            problem.level = req.body.level || problem.level
            problem.example = req.body.example || problem.example
            problem.constrain = req.body.constrain || problem.constrain
            problem.answer = req.body.answer || problem.answer
            problem.description = req.body.description || problem.description
            const updatedProblem = await problem.save()
            res.send({ updatedProblem })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

exports.deleteProblem = async (req: Request, res: Response) => {
    try {
        const problem = await ProblemModel.findById(req.params.id)
        if (problem) {
            const deletedProblem = await problem.deleteOne()
            res.status(200).send({ message: 'success', problem: deletedProblem })
        }
        res.status(404).send({ message: 'Product not found!' })
    } catch (error) {
        res.status(400).json({
            succcess: 'fail',
            message: error
        })
    }
}

exports.solveProblem = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.user._id);
        if (user) {
            await user.solvedProblems?.push(req.params.id)
            const solve = await user.save();
            res.send({ solve })
        }
        else{
            res.status(404).json({
                message: 'User not found!'
            })
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.getSolvedProblems = async (req:Request, res: Response) => {
    try {
        const problems = req.user.solvedProblems
        res.status(200).send({problems})
    } catch (error) {
        res.status(400).json(error);
    }
}