import express = require('express')
const {getProblem, createProblem, getProblems, getDailyProblems, deleteProblem} = require('../controllers/problemController')

const router: express.Router = require('express').Router()

router.get('/all', getProblems);
router.get('/daily', getDailyProblems)
router.get('/:slug',getProblem);
router.post('/createAlgorithm',createProblem)
router.delete("/:id", deleteProblem)


module.exports = router;
