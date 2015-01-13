var mongoose=require('mongoose');
//var bcrypt=require('bcrypt-nodejs');
//var crypto=require('crypto');

var userSchema = new mongoose.Schema({
    id:String,
    name:String,
    username:String,
    password:StringDecoder
});

