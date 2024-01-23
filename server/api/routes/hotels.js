const express = require('express');
const hotelmodel = require('../model/hotel');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// router.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

router.post('/addhotels', upload.single('file1'), async (req, res) => {
    try {
        const {
            hotelname, discription, location, manager, email, totalroom, price, street, pincode, status, rating
        } = req.body;

        const files = req.file;

        const hotelData = {
            image1: req.file.filename,
            hotelname, discription, location, manager, email, totalroom, price, street, pincode, status, rating
        };

        const result = await hotelmodel.create(hotelData);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/showhotels',(req,res)=>{
    hotelmodel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

router.get('/showhotelbyid/:id',(req,res)=>{
    const id = req.params.id;
    hotelmodel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
router.delete('/deletehotel/:id',(req,res)=>{
    const id = req.params.id;
    hotelmodel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
router.put('/updatehotel/:id',upload.single('file1'),(req,res)=>{
    const id = req.params.id;
    hotelmodel.findByIdAndUpdate({_id:id},
        {
          hotelname:req.body.hotelname,
          discription:req.body.discription , 
          location:req.body.location ,
          manager:req.body.manager ,
          email:req.body.email ,
          totalroom:req.body.totalroom ,
          price:req.body.price ,
          street:req.body.street ,
          pincode:req.body.pincode ,
          image1:req.file.filename ,
          status:req.body.status,
          rating:req.body.rating ,
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
})

module.exports = router;
