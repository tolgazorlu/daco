require("dotenv").config();
const nodemailer = require("nodemailer");

/**
 * @desc NODEMAILER CONFIGURATION
 */

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASSWORD,
    },
});

module.exports = transporter;
