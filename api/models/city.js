const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    code: String,
    name:String,
    division_id:String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});

module.exports = mongoose.model('City', citySchema);