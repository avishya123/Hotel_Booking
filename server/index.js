const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodel = require('./api/model/user');
const hotelroute = require('./api/routes/hotels.js');
const roomroute = require('./api/routes/rooms.js')
const facilityroute = require('./api/routes/facilities.js')


const app = express();
app.use(express.static('public'));


// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));
app.use(cookieParser());

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/Hotel', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use("/api/hotels", hotelroute);
app.use("/api/rooms", roomroute);
app.use("/api/facilities",facilityroute)

// Authentication Middleware
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("Token is Missing");
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.status(401).json("Error with token");
            } else {
                if (decoded.role === 'admin') {
                    next();
                } else {
                    return res.status(403).json("Not admin");
                }
            }
        });
    }
};

app.post("/login" , (req, res) => {
    const { email, password } = req.body;
    usermodel.findOne({ email: email })
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                   const token = jwt.sign({ email: user.email, role: user.role }, 
                    "jwt-secret-key", { expiresIn: '1d', });
                    res.cookie('token', token);
                    return res.json({ Status: "Success", role: user.role });
                } else {
                    return res.json("the password is incorrect ");
                }
            });
        } else {
            return res.json("NO record existed");
        }
    });
});

app.post('/register', (req, res) => {
    const { username, email, password,number,gender,street,city,pincode } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        usermodel.create({ username, email,number,gender,street,city,pincode, password: hash })
            .then(user => res.json("success"))
            .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

// Admin Dashboard
app.get('/admindashboard', verifyUser, (req, res) => {
    
    res.json("Admin Dashboard Success");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

