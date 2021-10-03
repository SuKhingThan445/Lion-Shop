const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    invoice_id: String,
    product_id: String,
    total_qty: String,
    total_price: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});

module.exports = mongoose.model('Sale', saleSchema);