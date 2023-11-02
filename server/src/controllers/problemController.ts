import { Response, Request, NextFunction } from 'express'
import { ProblemModel } from '../models/problem'
import {daily} from '../utils/daily'

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
        const problem = await ProblemModel.find({day: daily})
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

exports.deleteProblem =async (req:Request, res: Response) => {
    try {
        const problem = await ProblemModel.findById(req.params.id)
        if(problem){
            const deletedProblem = await problem.deleteOne()
            res.status(200).send({message: 'success', problem: deletedProblem})
        }
        res.status(404).send({message: 'Product not found!'})
    } catch (error) {
        res.status(400).json({
            succcess: 'fail',
            message: error
        })
    }
}