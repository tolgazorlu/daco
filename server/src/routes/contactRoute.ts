import express = require("express");
const contactController = require("../controllers/contactController");

const router: express.Router = require("express").Router();

router.post("/create", contactController.CreateContact);

module.exports = router;
