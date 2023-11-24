//IMPORTS
require("dotenv").config();
import express, { Express, Request, Response } from "express";
import chalk from "chalk";
import { Job } from "./utils/dailySchedule";
const cors = require("cors");
//ROUTE IMPORTS
const problemRoute = require("./routes/problemRoute");
const authRoute = require("./routes/authRoute");
const contactRoute = require("./routes/contactRoute");
const faqRoute = require("./routes/faqRoute");
const {uploadFile} = require('./utils/uploadImage')

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
app.use("/api/user", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/faq", faqRoute);

app.post('/upload', async (req: Request, res: Response) => {
    const result = await uploadFile(); 
    console.log(result);
    res.send(result);
})

//LISTEN
app.listen(port, () => {
  console.log(`Port is running on ${chalk.blue(port)}`);
});
