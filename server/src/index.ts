//IMPORTS
require('dotenv').config();
import express, { Express } from 'express';
import chalk from 'chalk';
import {Job} from './utils/daily';
const cors = require('cors')
//ROUTE IMPORTS
const problemRoute = require('./routes/problemRoute')
const authRoute = require('./routes/authRoute')

const app: Express = express();

//GET PORT NUMBER
const keys = require('./config/keys');
const { port } = keys;

//SETUP DB
const setupDB = require('./utils/db')
setupDB();

app.use(
    cors({
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Job;

//ROUTES
app.use('/api/problems', problemRoute)
app.use('/api/user', authRoute)

//LISTEN
app.listen(port, () => {
    console.log(`Port is running on ${chalk.blue(port)}`);
})
