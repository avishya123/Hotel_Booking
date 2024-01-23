const express = require('express');
const facilitymodel = require('../model/facility');
const router = express.Router();

router.post('/addfacility',(req,res)=>{
    const {hotelname,facilities} = req.body
    facilitymodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
router.get('/showfacility',(req,res)=>{
    facilitymodel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

module.exports = router;