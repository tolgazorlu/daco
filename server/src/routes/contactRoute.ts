import express = require("express");
const contactController = require("../controllers/contactController");

const router: express.Router = require("express").Router();

router.get("/all", contactController.getContacts);
router.post("/create", contactController.CreateContact);

module.exports = router;
