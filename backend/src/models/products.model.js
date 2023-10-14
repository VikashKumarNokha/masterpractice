const mongoose = require("mongoose");


const  ProductModel =  new mongoose.Schema({
           title : {type : String, required : true},
           price : {type : Number, required : true}, 
           ratting : {type : Number, required : true},
           categary : {type : String, required : true},
           description  : {type : String, required : true},
       })



module.exports = mongoose.model("testingproducts", ProductModel) ;