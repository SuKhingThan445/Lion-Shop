const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Store = require("../models/store");

router.get("/", (req, res, next) => {
    Store.find()
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

router.post("/", (req, res, next) => {
  const store = new Store({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    total_price: req.body.total_price,
    total_qty: req.body.total_qty,
    remain_qty: req.body.remain_qty,
    product_id: req.body.product_id,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    created_by: req.body.created_by,
    updated_by: req.body.updated_by,
  });
  store
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /store",
        createdStore: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:store_id", (req, res, next) => {
  const id = req.params.store_id;
  Store.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:storeId", (req, res, next) => {
  const id = req.params.storeId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Store.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:storeId", (req, res, next) => {
  const id = req.params.categoryId;
  Store.remove({ _id: id })
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
