const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require("./api/routes/users");
const shopRoutes = require("./api/routes/shops");
const categoriesRoutes = require("./api/routes/categories");
const storeRoutes = require("./api/routes/stores");
const cityRoutes = require("./api/routes/cities");
const townshipRoutes = require("./api/routes/townships");
const profileRoutes=require("./api/routes/profiles");
const divisionRoutes=require("./api/routes/divisions");
const unitRoutes=require("./api/routes/units");
const invoiceRoutes=require("./api/routes/invoices");
const saleRoutes=require("./api/routes/sales");

mongoose.connect(
  "mongodb+srv://sukhingthan:be4faultsu@cluster0.w7m44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true"
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
app.use("/shops",shopRoutes);
app.use("/categories",categoriesRoutes);
app.use("/stores",storeRoutes);
app.use("/division",divisionRoutes);
app.use("/city",cityRoutes);
app.use("/township",townshipRoutes);
app.use("/profiles",profileRoutes);
app.use("/units",unitRoutes);
app.use("/invoices",invoiceRoutes);
app.use("/sales",saleRoutes);


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

app.listen(process.env.PORT || 5000);
