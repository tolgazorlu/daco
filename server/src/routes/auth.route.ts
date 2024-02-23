import { Router } from "express";
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const authController = require("../controllers/auth.controller");
const router: Router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.put("/:id/verify/:token/", authController.Verify);
router.get("/images/:key", authController.GetImageFromS3);
router.post("/images", upload.single("image"), authController.UploadImage);
router.put("/passwordUpdate", Auth, authController.PasswordUpdate);
router.put("/update", Auth, authController.Update);
router.get("/all", Auth, Admin, authController.getUsers);
router.delete("/delete/:id", Auth, Admin, authController.deleteUser);

module.exports = router;
