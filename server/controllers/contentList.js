const contentList = require("../models/contentList");
const mongoose = require("mongoose");
//get all contents by categoryId (for auto-correct):
//?
const getByCategoryId = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה קטגוריה שהתקבל אינו תקין");
    let contentList = await contentList.findById(id);
    if (!contentList)
        return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    return res.send(contentList);
}
//user update his own list:
const updatecontentList = async (req, res) => {
    let contentListBody = req.body;
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("המזההה שהתקבל אינו תקין");
    let contentList = await contentList.findByIdAndUpdate(id, {
        $set: { Content: contentListBody.Content },
    }, { new: true })
    if (!contentList)
        return res.status(404).send("מצטערים לא נמצאה תוכן עם המזהה שהתקבל");
    return res.send(contentList);
}
module.exports = {
    getByCategoryId, updatecontentList
}