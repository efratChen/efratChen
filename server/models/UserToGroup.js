const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

const UserToGroupSchema = new mongoose.Schema({    
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const UserToGroup = mongoose.model('UserToGroup', UserToGroupSchema);

