require("dotenv").config();
const AWS = require("@aws-sdk/client-s3");

/**
 * @desc AWS S3 CONFIGURATION
 */

const s3 = new AWS.S3({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
    },
});

export default s3;
