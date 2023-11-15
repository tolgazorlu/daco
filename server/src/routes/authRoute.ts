import { Router } from "express";
import { isAuth } from "../utils/isAuth";
import { isAdmin } from "../utils/isAdmin";
const authController = require("../controllers/authController");
const router: Router = require("express").Router();

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.get("/verify", authController.Verify);
router.put("/passwordUpdate", isAuth, authController.PasswordUpdate);
router.put("/update", isAuth, authController.Update);
router.get("/all", isAuth, isAdmin, authController.getUsers);
router.delete('/delete/:id',isAuth, isAdmin, authController.deleteUser)

module.exports = router;
