require("dotenv").config();
import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/bucket";

async function getFileStream(fileKey: any) {
  const params = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME,
  };

  const command = new GetObjectCommand(params);

  try {
    const data = await s3.send(command);
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.getFileStream = getFileStream;
