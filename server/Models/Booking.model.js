const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    beauticianname:{
        type:String,
        require:true,
    },
    customername:{
        type:String,
        require:true,
    },
    package:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    time:{
        type:String,
        require:true,
    }
})

const Booking = Mongoose.model('Booking',schema);
module.exports = Booking;