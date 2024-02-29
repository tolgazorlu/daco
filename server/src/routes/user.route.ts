import { Router } from "express";
import { Auth } from "../middlewares/auth";
import { Admin } from "../middlewares/admin";
const userController = require("../controllers/user.controller");
const router: Router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/images/:key", userController.GetImageFromS3);
router.post("/images", upload.single("image"), userController.UploadImage);
router.get("/problems", Auth, userController.GetUserDailyProblems)
router.put("/update", Auth, userController.Update);
router.get("/all", Auth, Admin, userController.getUsers);

module.exports = router;
