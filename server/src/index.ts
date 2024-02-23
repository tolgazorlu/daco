//IMPORTS
require("dotenv").config();
import express, { Express } from "express";
import chalk from "chalk";
import { Job } from "./utils/schedule";
import path from "path";
const cors = require("cors");
//ROUTE IMPORTS
const statisticRoute = require("./routes/satistic.route");
const problemRoute = require("./routes/problem.route");
const authRoute = require("./routes/auth.route");
const contactRoute = require("./routes/contact.route");
const faqRoute = require("./routes/faq.route");

const app: Express = express();

//GET PORT NUMBER
const keys = require("./config/keys");
const { port } = keys;

//SETUP DB
const setupDB = require("./utils/database");
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

app.use(express.static(path.join(__dirname, "../../client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../../client/dist/index.html")),
);

//LISTEN
app.listen(port, () => {
  console.log(`Port is running on ${chalk.blue(port)}`);
});
