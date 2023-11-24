require("dotenv").config();
import s3 from "../config/bucket";
const fs = require("fs");

const uploadFile = (file: { path: string; filename: string }) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.putObject(params);
};

exports.uploadFile = uploadFile;
