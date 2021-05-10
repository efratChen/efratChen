const mongoose = require("mongoose");
const ListOpinionSchema = new mongoose.Schema({
    Opinion: {
        type: mongoose.SchemaTypes.Number, required: true
    },
    status: {
        type: mongoose.SchemaTypes.Number, required: true,
        min:0,
        max:2
    },
      //id user
      User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
      //id list
      User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'List'
    },

});
const ListOpinion=mongoose.model("ListOpinion",ListOpinionSchema);
module.exports=ListOpinion;
