const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});

module.exports = mongoose.model('Unit', unitSchema);