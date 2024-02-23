import express = require("express");
import { isAuth } from "../middlewares/isAuth";
import { isAdmin } from "../middlewares/isAdmin";
const faqController = require("../controllers/faq.controller");

const router: express.Router = require("express").Router();

router.get("/all", faqController.getFAQs);
router.post("/create", isAuth, isAdmin, faqController.createFAQ);
router.put("/update/:id", isAuth, isAdmin, faqController.editFAQ);
router.delete("/delete/:id", isAuth, isAdmin, faqController.deleteFAQ);

module.exports = router;
