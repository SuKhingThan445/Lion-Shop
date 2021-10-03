const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Sale = require("../models/sale");

router.get("/", (req, res, next) => {
  Sale.find()
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
  const sale = new Sale({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    invoice_id: req.body.invoiceId,
    product_id: req.body.product_id,
    total_price: req.body.code,
    total_qty: req.body.qty,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    created_by: req.body.created_by,
    updated_by: req.body.updated_by,
  });
  sale
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /sale",
        createdInvoice: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:saleId", (req, res, next) => {
  const id = req.params.saleId;
  Sale.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for invoice ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:saleId", (req, res, next) => {
  const id = req.params.saleId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Sale.update({ _id: id }, { $set: updateOps })
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

router.delete("/:saleId", (req, res, next) => {
  const id = req.params.saleId;
  Sale.remove({ _id: id })
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
