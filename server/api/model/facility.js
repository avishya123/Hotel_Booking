const mongoose = require('mongoose')

const facilityschema = new mongoose.Schema({
    hotelname:String,
    facilities:[String]
})

const facilitymodel = mongoose.model('facility',facilityschema)

module.exports = facilitymodel;