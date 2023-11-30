require("dotenv").config();
import s3 from "../config/bucket";
const fs = require("fs");

let fileName: string = "";

const uploadFile = (file: { path: string; filename: string }) => {
  const fileStream = fs.createReadStream(file.path);
  fileName = fileStream.path.split("/")[1];

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.putObject(params);
};

export { uploadFile, fileName };
