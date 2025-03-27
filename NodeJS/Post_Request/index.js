const express = require("express");
const app=express();
let path = require('path');
let port = 3000;
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log("Connected to the Server....");
})

app.get("/Get_Register",(req,res)=>{
    let {username,pw} = req.query;
    res.render("home_get.ejs",{username,pw});
})
app.post("/Post_Register",(req,res)=>{
    let {username,pw}=req.body;
    res.render("home.ejs",{username,pw});
})