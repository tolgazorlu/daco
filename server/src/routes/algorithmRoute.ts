import express = require('express')
const {getAlgorithm, createAlgorithm, getAlgorithms, getDailyAlgorithms, deleteProblem} = require('../controllers/algorithmController')

const router: express.Router = require('express').Router()

router.get('/all', getAlgorithms);
router.get('/daily', getDailyAlgorithms)
router.get('/:slug',getAlgorithm);
router.post('/createAlgorithm',createAlgorithm)
router.delete("/:id", deleteProblem)


module.exports = router;
