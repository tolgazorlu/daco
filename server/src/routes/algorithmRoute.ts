import express = require('express')
const {getAlgorithm, createAlgorithm, getAlgorithms} = require('../controllers/algorithmController')

const router: express.Router = require('express').Router()

router.get('/all', getAlgorithms);
router.get('/:slug',getAlgorithm);
router.post('/createAlgorithm',createAlgorithm);


module.exports = router;
