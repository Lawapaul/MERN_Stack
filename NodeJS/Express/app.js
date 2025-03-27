const express=require("express");
const app=express();
let port =3000
app.listen(port,()=>{
    console.log("listening...");
})
// app.use((req,res)=>{
//     console.log("request received!!!");
//     res.send("This is a Basic Response!!!");
// })
app.get("/welcome",(req,res)=>{
    res.send("Welcome Harshit");
});
app.get("/:username/:surname",(req,res)=>{
    let {username,surname}=req.params;
    let htmlstr=`<h1>Hello ${username}. Your surname is ${surname}</h1>`
    res.send(htmlstr);
})
app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`The query was : ${q}`);
})