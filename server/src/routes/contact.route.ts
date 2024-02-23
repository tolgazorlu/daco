import express = require("express");
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const contactController = require("../controllers/contact.controller");

const router: express.Router = require("express").Router();

router.get("/all", Auth, Admin, contactController.getContacts);
router.post("/create", contactController.CreateContact);

module.exports = router;
