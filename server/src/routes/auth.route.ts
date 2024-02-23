import { Router } from "express";
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const authController = require("../controllers/auth.controller");
const router: Router = require("express").Router();

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.put("/:id/verify/:token/", authController.Verify);
router.put("/passwordUpdate", Auth, authController.PasswordUpdate);
router.delete("/delete/:id", Auth, Admin, authController.deleteUser);

module.exports = router;
