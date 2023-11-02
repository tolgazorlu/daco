import express = require('express')
import { isAuth } from '../utils/isAuth';
import { isAdmin } from '../utils/isAdmin';
const { getProblem, createProblem, getProblems, getDailyProblems, deleteProblem } = require('../controllers/problemController')

const router: express.Router = require('express').Router()

router.get('/all', getProblems);
router.get('/daily', getDailyProblems)
router.get('/:slug', getProblem);
router.post('/createAlgorithm', isAuth, isAdmin, createProblem)
router.delete("/:id", isAuth, isAdmin, deleteProblem)


module.exports = router;
