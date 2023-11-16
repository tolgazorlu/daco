import express = require("express");
import { isAuth } from "../utils/isAuth";
import { isAdmin } from "../utils/isAdmin";
const faqController = require("../controllers/faqController");

const router: express.Router = require("express").Router();

router.get("/all", faqController.getFAQs);
router.post("/create", isAuth, isAdmin, faqController.createFAQ);
router.put("/update/:id", isAuth, isAdmin, faqController.editFAQ);
router.delete("/delete/:id", isAuth, isAdmin, faqController.deleteFAQ);

module.exports = router;
