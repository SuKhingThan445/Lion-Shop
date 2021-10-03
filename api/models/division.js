const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    code: String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});

module.exports = mongoose.model('Division', divisionSchema);