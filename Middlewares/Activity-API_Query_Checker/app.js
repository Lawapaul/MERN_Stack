const express = require('express');
const app=express();
const port = 3000;

app.use("/api/grant",(req,res,next)=>{
    let {query} = req.query;
    if(query == 'grant501'){
        next();
    }
    else{
        res.send("Not Granted");
    }
});

app.get("/api/grant",(req,res)=>{
    res.send("Welcome to Home Page");
})
app.listen(port,()=>{
    console.log("Connected...")
})