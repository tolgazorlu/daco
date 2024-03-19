import express = require("express");
const statsController = require("../controllers/stats.controller");

const router: express.Router = require("express").Router();

router.get("/totalProblems", statsController.getTotalProblemStat);
router.get("/totalUsers", statsController.getTotalUserStat);

module.exports = router;
