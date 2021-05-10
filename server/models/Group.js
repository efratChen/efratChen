const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

const groupSchema = new mongoose.Schema({

    name: String,
//id המשתמש המנהל
});
const Group = mongoose.model('Group', groupSchema);

