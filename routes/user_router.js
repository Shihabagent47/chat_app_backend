
const express=require("express");
const router=express.Router();
const{getUserProfile}=require("../controller/user_controller")


router.get('/getUserProfile',getUserProfile);

module.exports=router;