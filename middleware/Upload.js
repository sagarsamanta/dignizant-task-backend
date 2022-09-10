const multer = require("multer");

const productImgStorage = multer.memoryStorage();
const product_img_upload = multer({
  storage: productImgStorage,
  limits: {
    fileSize: 20000000, // 10000000 Bytes = 10 MB
  },
}).fields([{ name: "productImg", maxCount: 1 }]);

module.exports = {
  product_img_upload,
};
