const express = require("express");
const router=express.Router();
const mongoose=require("mongoose");

const ProfileData=require("../models/profile");

router.get("/", (req,res,next) =>{
  ProfileData.find()
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
    const profileRequest = new ProfileData({
      _id: new mongoose.Types.ObjectId(),
      img: req.body.img,
      name: req.body.name,
      login_id: req.body.login_id,
      city_id: req.body.city_id,
      township_id: req.body.township_id,
      division_id:req.body.division_id,
      ph_no:req.body.ph_no,
      address:req.body.address,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
    });
    profileRequest
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /profiles",
          createdProfile: result
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