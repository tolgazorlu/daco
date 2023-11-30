//IMPORTS
require("dotenv").config();
import express, { Express } from "express";
import chalk from "chalk";
import { Job } from "./utils/dailySchedule";
const cors = require("cors");
//ROUTE IMPORTS
const statisticRoute = require("./routes/satisticRoute");
const problemRoute = require("./routes/problemRoute");
const authRoute = require("./routes/authRoute");
const contactRoute = require("./routes/contactRoute");
const faqRoute = require("./routes/faqRoute");

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

//LISTEN
app.listen(port, () => {
  console.log(`Port is running on ${chalk.blue(port)}`);
});
