import express = require("express");
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const faqController = require("../controllers/faq.controller");

const router: express.Router = require("express").Router();

router.get("/all", faqController.getFAQs);
router.post("/create", Auth, Admin, faqController.createFAQ);
router.put("/update/:id", Auth, Admin, faqController.editFAQ);
router.delete("/delete/:id", Auth, Admin, faqController.deleteFAQ);

module.exports = router;
