//IMPORTS
require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import chalk from 'chalk';
const cors = require('cors')
//ROUTE IMPORTS
const algorithmRoute = require('./routes/algorithmRoute')

const app: Express = express();

const keys = require('./config/keys');
const { port } = keys;

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

//ROUTES
app.use('/api/algorithms', algorithmRoute)

//LISTEN
app.listen(port, () => {
    console.log(`Port is running on ${chalk.blue(port)}`);
})
