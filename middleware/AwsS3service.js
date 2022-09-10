const AWS = require("aws-sdk");
require("dotenv").config();
const uuid = require("uuid").v4;

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
exports.s3Upload = async (file) => {
  const param = {
    Body: file.buffer,
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}-${file.originalname}`,
  };
  return await s3.upload(param).promise();
};
