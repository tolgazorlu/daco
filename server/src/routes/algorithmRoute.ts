import express = require('express')
const {getAlgorithm, createAlgorithm, getAlgorithms} = require('../controllers/algorithmController')

const router: express.Router = require('express').Router()

router.get('/:slug',getAlgorithm);
router.get('/all', getAlgorithms);
router.post('/createAlgorithm',createAlgorithm);


module.exports = router;
