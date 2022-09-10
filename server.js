const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/product");
require("dotenv").config();

app.use(express.json({ extended: false }));
app.use(cors());
app.use(morgan("combined"));


//database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  });
const port = process.env.PORT;

app.use("/api/product", productRoutes);


app.listen(port, () => {
  console.log(`SERVER WORKING ON ${port}`);
});
