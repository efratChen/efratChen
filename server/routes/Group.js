const express = require("express");
const route=express.Router();
const groupController=require("../controllers/Group");

route.get("/:id",groupController.getById)
route.post("/",groupController.addCake)
route.delete("/:id",groupController.deleteCake)
module.exports=route;
