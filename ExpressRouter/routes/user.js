const express=require("express");
const app = express();
const router=express.Router();
router.get("/login",(req,res)=>{
    res.send("Inside Login Page");
})
router.get("/login/create",(req,res)=>{
    res.send("Inside Response Page");
})
router.get("/login/forgot",(req,res)=>{
    res.send("Inside Forgot page");
})
module.exports=router;