var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    email : {type: String,require: true},
    username : {type: String,require: true},
    password : {type: String,require: true}
})

var UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;
