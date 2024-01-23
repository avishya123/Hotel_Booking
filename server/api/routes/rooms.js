const express = require('express');
const multer = require('multer');
const roommodel = require('../model/room');
const path = require('path')
const router = express.Router();

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

router.post('/addrooms', upload.single('rooms'), (req, res) => { 
    if (!req.body.hotelname) {
        return res.status(400).json({ error: 'Hotel name is required.' });
    }

    const roomdata = {
        rooms: req.file.filename,  // Corrected from req.files.filename to req.file.filename
        hotelname: req.body.hotelname,
        status: req.body.status,
        price: req.body.price,
        disp: req.body.disp
    };

    roommodel.create(roomdata)
        .then(room => res.json(room))
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
});

router.get('/showrooms',(req,res)=>{
    roommodel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

module.exports = router;