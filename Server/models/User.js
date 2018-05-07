const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//create schemas
const UserSchemas = new Schema ({
    name: {
       type: String,
       required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
       type: String
        //required: true // getting from gravatar
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model ('users',UserSchemas);