const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    id:{
        type:String,
        unique:true,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    starrating:{
        type:String,
        require:true,
    }
})

const Rating = Mongoose.model('Rating',schema);
module.exports = Rating;