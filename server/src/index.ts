//IMPORTS
require("dotenv").config();
import express, { Express, Request, Response } from "express";
import chalk from "chalk";
import { Job } from "./utils/dailySchedule";
const cors = require("cors");
//ROUTE IMPORTS
const statisticRoute = require("./routes/satisticRoute");
const problemRoute = require("./routes/problemRoute");
const authRoute = require("./routes/authRoute");
const contactRoute = require("./routes/contactRoute");
const faqRoute = require("./routes/faqRoute");
const { uploadFile } = require("./utils/uploadImage");
const { getFileStream } = require("./utils/downloadImage");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app: Express = express();

//GET PORT NUMBER
const keys = require("./config/keys");
const { port } = keys;

//SETUP DB
const setupDB = require("./utils/db");
setupDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Job;

//ROUTES
app.use("/api/problems", problemRoute);
app.use("/api/statistic", statisticRoute);
app.use("/api/user", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/faq", faqRoute);

app.get("/images/:key", (req: Request, res: Response) => {
  const key = req.params.key;
  getFileStream(key).then((data: any) => data.Body.pipe(res));
});

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);

  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log(result);
  res.send({ imagePath: `/images/${result.Key}` });
});

//LISTEN
app.listen(port, () => {
  console.log(`Port is running on ${chalk.blue(port)}`);
});
