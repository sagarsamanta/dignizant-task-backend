const express = require("express");
const router = express.Router();
const product = require("../controllers/product");
const { product_img_upload } = require("../middleware/Upload");

// add product
router.post("/addProduct", product_img_upload, product.addProduct);
// get all product

router.get("/getAllTypeProduct", product.getAllTypesProduct);

module.exports = router;
