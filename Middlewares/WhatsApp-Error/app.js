const express = require("express");
const app = express();
const path = require("path");
const User = require("./models/data-index")
const mongoose = require('mongoose');
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.set("view enigne","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")))

const port = 8000;
async function main(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/crud');
}

app.listen(port,()=>{
    console.log("listening");
})

app.route("/home")
.get(async (req,res)=>{
    let user = await User.find()
    res.render("Chat.ejs",{user});
})

app.route("/new")
.get((req,res)=>{
    res.render("new.ejs")
})
.post((req,res)=>{
    try{
        let {from,to,message} = req.body;
        let user1= new User({
            from: from,
            to: to,
            message: message,
            date: new Date()
        }).save()
        .then(()=>{
            res.redirect("/home");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    catch(err){
        res.send(err);
    }
})

app.route("/update/:id")
.get(async(req,res)=>{
    try{
        let {id} = req.params;
        let data = await User.findById(id);
        res.render("update.ejs",{id,data});
    }
    catch(err){
        res.send(err);
    }
    
})
.post((req,res)=>{
    try{
        let {id} = req.params;
        let {message} = req.body;
        User.findByIdAndUpdate(id,{message: message})
        .then(()=>{
            res.redirect("/home");
        })
        .catch((err)=>{
            console.log(err);
        })
        }
    catch(err){
        res.send(err);
    }    
}) 


app.delete("/home/:id",(req,res)=>{
    try{
        let {id} = req.params;
        User.findByIdAndDelete(id)
        .then(()=>{
            res.redirect("/home");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    catch(err){
        res.send(err);
    }
    
})