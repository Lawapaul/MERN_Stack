const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../views"));
app.use(express.static(path.join(__dirname,"../public")))
const instaData=require("./data.json");
let port = 3000;
app.listen(port,()=>{
    console.log("listening....");
});
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const data=instaData[username];
    if(data){
        res.render("instagram_updated.ejs",{username,data});
    }
    else{
        res.render("error.ejs");
    }
    
    
});