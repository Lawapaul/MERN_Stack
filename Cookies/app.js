const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/",(req,res)=>{
    res.cookie("Name","Harshit");
    res.send("Welcome User");
})

app.get("/user",(req,res)=>{
    let {Name = "anonymous"}=req.cookies;
    res.send(`Welcome : ${Name}`);
})
app.listen(port,()=>{
    console.log("Connected...");
})