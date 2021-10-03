const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: String,
    name: String,
    unit_id: String,
    category_id: String,
    discount: String,
    price: Number,
    qty: Number,
    total: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String
});

module.exports = mongoose.model('Product', productSchema);