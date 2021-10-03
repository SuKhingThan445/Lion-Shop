const express = require("express");
const router=express.Router();
const mongoose=require("mongoose");

const ShopData=require("../models/shop");

router.get("/", (req,res,next) =>{
    ShopData.find()
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: error
        });
    });
});
router.post("/", (req, res, next) => {
    const shopRequest = new ShopData({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      code: req.body.code,
      password: req.body.password,
      phone_no: req.body.phone_no,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
    });
    shopRequest
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /shops",
          createdShop: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  module.exports=router;