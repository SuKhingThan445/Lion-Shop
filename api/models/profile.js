const mongoose = require('mongoose');
const profileSchema=mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    img: String,
    name: String,
    login_id: String,
    city_id:String,
    township_id: String,
    division_id:String,
    ph_no:String,
    address:String,
    created_at: String,
    updated_at: String,
    created_by: String,
    updated_by: String

});
module.exports= mongoose.model('Profile',profileSchema);