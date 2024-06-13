// const Mongoose = require ("mongoose");
// const schema = new Mongoose.Schema({
//     beauticianname:{
//         type:String,
//         require:true,
//     },
//     customername:{
//         type:String,
//         require:true,
//     },
//     package:{
//         type:String,
//         require:true,
//     },
//     date:{
//         type:String,
//         require:true,
//     },
//     time:{
//         type:String,
//         require:true,
//     }
// })

// const Booking = Mongoose.model('Booking',schema);
// module.exports = Booking;



// bookingModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  beauticianName: { type: String, required: true },
  customerName: { type: String, required: true },
  packages: [{ type: String }], // Assuming packages are stored as an array of strings
  date: { type: Date, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
