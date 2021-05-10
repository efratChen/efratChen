const mongoose = require("mongoose");
const ListNotesSchema = new mongoose.Schema({
    Note: {
        type: mongoose.SchemaTypes.String, required: true
    },
     //id contentList
     ContentList: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'ContentList'
    },
    //id user
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});
const ListNotes=mongoose.model("ListNotes",ListNotesSchema);
module.exports=ListNotes;
