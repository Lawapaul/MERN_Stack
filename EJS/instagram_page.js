const express=require('express');
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
let port = 3000;
app.listen(port,()=>{
    console.log("Listening.....");
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("instagram.ejs",{username});
})