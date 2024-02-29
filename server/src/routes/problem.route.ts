import express = require("express");
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const problemController = require("../controllers/problem.controller");

const router: express.Router = require("express").Router();

router.get("/solved", Auth, problemController.getSolvedProblems);
router.get("/all", Auth, Admin, problemController.getProblems);
// router.get("/daily", problemController.getDailyProblems);
router.get("/:slug", problemController.getProblem);
router.put("/solveProblem/:id", Auth, problemController.solveProblem);
router.put("/update/:id", Auth, Admin, problemController.updateProblem);
router.post("/create", Auth, Admin, problemController.createProblem);
router.delete("/:id", Auth, Admin, problemController.deleteProblem);

module.exports = router;
