const Mongoose = require('mongoose');
require('dotenv').config();
const mongodburl = process.env.mongodburl
const userRoutes = require('../Routes/UserRoutes');
const beauticianRoutes = require('../Routes/BeauticianRoutes');
const beauticianprofileRoutes = require('../Routes/BeauticianprofileRoutes');
const bookingRoutes = require('../Routes/BookingRoutes');
const ratingRoutes = require('../Routes/RatingRoutes');
const LoginRoutes =require('../Routes/LoginRoutes');
const AdminRoutes = require('../Routes/AdminRoutes')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors')
const app = express()
app.use(express())
app.use(bodyParser.json())
app.use(
   cors({
     origin: ["http://localhost:3000"],
     methods: ["GET", "POST","DELETE","PUT", "PATCH"],
     credentials: true,
   })
 );



app.use('/beautician', beauticianRoutes)
app.use('/users',userRoutes)
app.use('/rating',ratingRoutes)
app.use('/beauticianprofile',beauticianprofileRoutes)
app.use('/booking',bookingRoutes)
app.use('/user',LoginRoutes)
app.use('/Admin',AdminRoutes)
const PORT = 3002;



function connectDb() {
   Mongoose.connect(mongodburl).then(() => {
      console.log("Connected")

   })
      .catch((err) => {
         console.log("Connection failed", err)
      })

   app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`)
   })
}

module.exports = connectDb;

