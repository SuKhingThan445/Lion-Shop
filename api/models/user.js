const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    code:String,
    password: String,
    phone_no:String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String
});

module.exports = mongoose.model('User', userSchema);