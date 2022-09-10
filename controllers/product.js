const { s3Upload } = require("../middleware/AwsS3service");
const Product = require("../models/product");
exports.addProduct = async (req, res) => {
  const { name, date, status, price } = req.body;
  let fileLocation = "";
  try {
    if (typeof req.files?.productImg !== "undefined") {
      const { Location } = await s3Upload(req.files.productImg[0]);
      fileLocation = Location;
    }
    const newProduct = new Product({
      name,
      date,
      status,
      price,
      imgUrl: fileLocation,
    });
    const product = await newProduct.save();
    res.status(200).send({ message: "Successfull", data: product });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};
exports.getAllTypesProduct = async (req, res) => {
  try {
    const products = await Product.find();
    // const progressTypeProducts = await Product.find({ status: "Progress" });
    // const waitingTypesProducts = await Product.find({ status: "Waiting" });
    // const completedTypesProducts = await Product.find({ status: "Completed" });
    res.status(200).send({
      data: products,
    });
  } catch (error) {
    res.status(500).send({ message: "Server Error" });
  }
};
exports.updateProduct = () => {};
exports.deleteProduct = () => {};
