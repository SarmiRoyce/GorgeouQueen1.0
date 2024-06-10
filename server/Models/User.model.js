const Mongoose = require ("mongoose");
const schema = new Mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})

const User = Mongoose.model('User',schema);
module.exports = User;