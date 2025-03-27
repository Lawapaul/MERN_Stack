const express=require('express');
const path=require('path');
const app=express();
port =8080;
app.listen(port,()=>{
    console.log("Listening....");
})
app.set("views",path.join(__dirname,"/views"));
app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let number=Math.floor(Math.random()*6)+1;
    res.render("random.ejs",{number});
})

app.get("/fruits",(req,res)=>{
    const fruit=["apple","orange","banana"];
    res.render("fruit.ejs",{fruit});
})