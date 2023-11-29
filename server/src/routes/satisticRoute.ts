import express = require("express");
const statisticController = require("../controllers/statisticController");

const router: express.Router = require("express").Router();

router.get("/totalProblems", statisticController.getTotalProblemStat);
router.get("/totalUsers", statisticController.getTotalUserStat);
router.get("/day", statisticController.getDayStat);
router.get("/todaysUsers", statisticController.getTodaysUsersStat);

module.exports = router;
