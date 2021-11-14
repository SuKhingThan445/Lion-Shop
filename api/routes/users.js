const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Users = require("../models/user");

router.post("/", (req, res, next) => {
  const userData = new Users({
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
  userData
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /userData",
        createdUser: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.get("/:name", (req, res, next) => {
  const name=req.params.name;
  Users.find({name:name})
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  Users.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;
