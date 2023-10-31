import express = require('express')
const {getAlgorithm, createAlgorithm, getAlgorithms, getDailyAlgorithms} = require('../controllers/algorithmController')

const router: express.Router = require('express').Router()

router.get('/all', getAlgorithms);
router.get('/daily', getDailyAlgorithms)
router.get('/:slug',getAlgorithm);
router.post('/createAlgorithm',createAlgorithm);


module.exports = router;
