const mongoose = require('mongoose')

const roomschema = new mongoose.Schema({
    hotelname:String,
    status:String,
    rooms: String ,
    price:Number,
    disp:String
})

const roommodel = mongoose.model('room',roomschema)

module.exports = roommodel;