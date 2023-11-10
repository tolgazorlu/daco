import express = require('express')
import { isAuth } from '../utils/isAuth';
import { isAdmin } from '../utils/isAdmin';
const problemController = require('../controllers/problemController')

const router: express.Router = require('express').Router()

router.get('/solved', isAuth, problemController.getSolvedProblems)

router.get('/all', isAuth, isAdmin, problemController.getProblems);
router.get('/daily', problemController.getDailyProblems)
router.get('/:slug', problemController.getProblem);

router.put('/solveProblem/:id', isAuth, problemController.solveProblem);

router.put('/update/:id', isAuth, isAdmin, problemController.updateProblem)
router.post('/create', isAuth, isAdmin, problemController.createProblem)
router.delete("/:id", isAuth, isAdmin, problemController.deleteProblem)


module.exports = router;
