import { Response, Request, NextFunction } from 'express'
import { AlgorithmModel } from '../models/algorithm'

exports.createAlgorithm = async (req: Request, res: Response) => {
    try {
        const algorithm = await AlgorithmModel.create(
            {
                sequence: req.body.sequence,
                slug: req.body.slug,
                level: req.body.level,
                title: req.body.title,
                description: req.body.description,
                example: req.body.example,
                constrain: req.body.constrain,
                answer: req.body.answer
            }
        )
        res.status(201).json(algorithm)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAlgorithms = async (req: Request, res: Response) => {
    try {
        const algorithm = await AlgorithmModel.find({})
        if (algorithm) {
            res.status(200).send(algorithm)
        }
        else {
            res.status(404).send('Algorithm not found!')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAlgorithm = async (req: Request, res: Response) => {
    try {
        const algorithm = await AlgorithmModel.findOne({ slug: req.params.slug })
        if (algorithm) {
            res.status(200).send(algorithm)
        }
        else {
            res.status(404).send('Algorithm not found!')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}