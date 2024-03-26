import express = require("express");
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const problemController = require("../controllers/problem.controller");

const router: express.Router = require("express").Router();

router.get("/solved", Auth, problemController.getSolvedProblems);
router.get("/all", Auth, Admin, problemController.getProblems);
router.get("/:slug", problemController.getProblem);
router.get(
    "/editProblem/:slug",
    Auth,
    Admin,
    problemController.getProblemForEdit,
);
router.put("/solveProblem/:id", Auth, problemController.solveProblem);
router.put("/update/:id", Auth, Admin, problemController.updateProblem);
router.put("/publish/:id", Auth, Admin, problemController.publishProblem);
router.put("/draft/:id", Auth, Admin, problemController.draftProblem);
router.post("/create", Auth, Admin, problemController.createProblem);
router.delete("/:id", Auth, Admin, problemController.deleteProblem);

module.exports = router;
