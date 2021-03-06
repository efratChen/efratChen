const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    Name: {
        type: mongoose.SchemaTypes.String, required: true
    },
    Mail: {
        // type: mongoose.SchemaTypes.String, required: true
     
            type: String,
            required: true,
            match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "please enter a valid email!"],
            unique: true,
            message: '{VALUE} is not supported'
        },
    Password: {
        type: mongoose.SchemaTypes.String, required: true
    },
    OpinionDate: Date,
    
});
const User=mongoose.model("User",UserSchema);
module.exports=User;
