const mongoose=require('mongoose')

const userschema= new mongoose.Schema({

    username:String,
    email:String,
    password:String,
    gender:String,
    number:Number,
    street:String,
    city:String,
    pincode:Number,
    role:{
        type:String,
        default:'visitor'
    }
})

const usermodel=mongoose.model('user',userschema);
module.exports=usermodel;