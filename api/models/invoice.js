const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Inv_no: String,
    name: String,
    date: String,
    total_qty: String,
    total_price: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});

module.exports = mongoose.model('Invoice', invoiceSchema);