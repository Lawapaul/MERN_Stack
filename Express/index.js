const express=require("express");
const app=express();
let port = 3000;



app.listen(port,()=>{
    console.log("Initialization");
});

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
});


app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`You searched ${q}`);
    
})