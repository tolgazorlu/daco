require('dotenv').config();
import s3 from '../config/bucket'

const uploadFile = () => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'hello.txt',
        Body: 'Hello :)'
    };

    return s3.putObject(params);
};

module.exports = {uploadFile};