"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAlgorithm, createAlgorithm, getAlgorithms } = require('../controllers/algorithmController');
const router = require('express').Router();
router.get('/:slug', getAlgorithm);
router.get('/all', getAlgorithms);
router.post('/createAlgorithm', createAlgorithm);
module.exports = router;
