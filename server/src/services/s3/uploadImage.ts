require("dotenv").config();
import s3 from "../../config/bucket.config";
const fs = require("fs");

/**
 * @desc UPLOAD FILE
 */

const uploadFile = (file: { path: string; filename: string }) => {
    const fileStream = fs.createReadStream(file.path);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Body: fileStream,
        Key: file.filename,
    };

    return s3.putObject(params);
};

export { uploadFile };
