const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

const ListSchema = new mongoose.Schema({
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    name: String,
});
const List = mongoose.model('List', ListSchema);
