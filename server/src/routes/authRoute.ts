import { Router } from "express";
import { isAuth } from "../utils/isAuth";
import { isAdmin } from "../utils/isAdmin";
const authController = require("../controllers/authController");
const router: Router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.put("/:id/verify/:token/", authController.Verify);
router.get("/images/:key", authController.GetImageFromS3);
router.post("/images", upload.single("image"), authController.UploadImage);
router.put("/passwordUpdate", isAuth, authController.PasswordUpdate);
router.put("/update", isAuth, authController.Update);
router.get("/all", isAuth, isAdmin, authController.getUsers);
router.delete("/delete/:id", isAuth, isAdmin, authController.deleteUser);

module.exports = router;
