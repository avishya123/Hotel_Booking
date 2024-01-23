const mongoose = require('mongoose')


const hotelschema = new mongoose.Schema({
    hotelname:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    manager:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    totalroom:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
   image1:{
        type:String,
        required:true
    },

    status:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    //  rooms:[String]
})
const hotelmodel = mongoose.model('hotels',hotelschema)
module.exports = hotelmodel