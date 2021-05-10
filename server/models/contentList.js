
const mongoose = require("mongoose");
const ContentListSchema = new mongoose.Schema({
    Content: {
        type: mongoose.SchemaTypes.String, required: true
    },
    //id list
    List: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'List'
    }
});
const ContentList=mongoose.model("ContentList",ContentListSchema);
module.exports=ContentList;
