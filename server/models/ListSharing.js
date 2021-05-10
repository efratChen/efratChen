const mongoose = require("mongoose");
mongoose.connect("").then(x => {
    console.log("connected to mongo");

}).catch(err => console.log(err.message));

const ListSharingSchema = new mongoose.Schema({  
    list :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'List'
    },
     group :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    },
    levelSharing: {
        type: Number,
        min: 0,
        max: 2
      },
      lockLevelSharing: {
        type: Number,
        min: 0,
        max: 1
      }
});
const ListSharing = mongoose.model('ListSharing', ListSharingSchema);

