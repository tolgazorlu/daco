import express = require("express");
import { isAuth } from "../middlewares/isAuth";
import { isAdmin } from "../middlewares/isAdmin";
const contactController = require("../controllers/contactController");

const router: express.Router = require("express").Router();

router.get("/all", isAuth, isAdmin, contactController.getContacts);
router.post("/create", contactController.CreateContact);

module.exports = router;
