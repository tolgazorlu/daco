import express = require("express");
import { isAuth } from "../utils/isAuth";
import { isAdmin } from "../utils/isAdmin";
const contactController = require("../controllers/contactController");

const router: express.Router = require("express").Router();

router.get("/all", isAuth, isAdmin, contactController.getContacts);
router.post("/create", contactController.CreateContact);

module.exports = router;
