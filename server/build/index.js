"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IMPORTS
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const cors = require('cors');
//ROUTE IMPORTS
const algorithmRoute = require('./routes/algorithmRoute');
const app = (0, express_1.default)();
const keys = require('./config/keys');
const { port } = keys;
const setupDB = require('./utils/db');
setupDB();
app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//ROUTES
app.use('/api/algorithms', algorithmRoute);
//LISTEN
app.listen(port, () => {
    console.log(`Port is running on ${chalk_1.default.blue(port)}`);
});
