"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAlgorithm, createAlgorithm, getAlgorithms } = require('../controllers/algorithmController');
const router = require('express').Router();
router.get('/all', getAlgorithms);
router.get('/:slug', getAlgorithm);
router.post('/createAlgorithm', createAlgorithm);
module.exports = router;
