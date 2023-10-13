"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const algorithm_1 = require("../models/algorithm");
exports.createAlgorithm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const algorithm = yield algorithm_1.AlgorithmModel.create({
            sequence: req.body.sequence,
            slug: req.body.slug,
            level: req.body.level,
            title: req.body.title,
            description: req.body.description,
            example: req.body.example,
            constrain: req.body.constrain,
            answer: req.body.answer
        });
        res.status(201).json(algorithm);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAlgorithms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const algorithm = yield algorithm_1.AlgorithmModel.find({});
        if (algorithm) {
            res.status(200).send(algorithm);
        }
        else {
            res.status(404).send('Algorithm not found!');
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAlgorithm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const algorithm = yield algorithm_1.AlgorithmModel.findOne({ slug: req.params.slug });
        if (algorithm) {
            res.status(200).send(algorithm);
        }
        else {
            res.status(404).send('Algorithm not found!');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
