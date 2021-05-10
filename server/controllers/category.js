const category = require("../models/chef");
const category = require("../models/category");
const mongoose = require("mongoose");
const getAll = async (req, res) => {
    let categorys = await Category.find();
    return res.send(categorys);
}

const getById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזהה קטגוריה שהתקבל אינו תקין");
    let contentList = await contentList.findById(id);
    if (!contentList)
        return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    return res.send(contentList);
}
module.exports = {
    getById, getAll
}
