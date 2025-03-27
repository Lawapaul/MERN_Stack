const express=require('express');
const app=express();
const path=require('path');

const methodOverride = require('method-override');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(methodOverride('_method'))
let port=8000;
const { v4: uuidv4 } = require('uuid');


app.get("/threads/login",(req,res)=>{
    res.render("welcome.ejs");
})

app.post("/threads/login",(req,res)=>{
    let {username,pw} = req.body;
    if(username == "harshit" && pw=="singh"){
        res.redirect("/threads/home");
    }
    else if(username != "harshit"){
        res.render("invalid_username.ejs");
    }
    else if(pw!= "singh"){
        res.render("invalid_pw.ejs");
    }
})
let posts=[
    {
        id: uuidv4(),
        username: "surfer.w96",
        content: "Just started working on my new project—a dynamic sidebar that toggles smoothly with JavaScript!  #WebDev #CodingLife",
    }
    ,
    {
        id:uuidv4(),
        username: "lawapaul",
        content: "💡 Built a responsive sidebar using Flexbox + JavaScript! Click the button & watch it slide away! 😎  🔥 Live Demo: [your-link-here]  #100DaysOfCode #WebDevelopment #JavaScript   📸 [Attached Image]"
    }
    ,
    {
        id:uuidv4(),
        username: "HarshitShekhawat",
        content: "The measles vaccine is beneficial for the immune system.Measles damages the immune system"
    }
]
app.get("/threads/home",(req,res)=>{
    res.render("home.ejs",{posts});
})

app.get("/threads/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/threads/new",(req,res)=>{
    let {username, content} = req.body;
    const obj ={
        id:uuidv4(),
        username: username,
        content: content
    }
    posts.push(obj);
    res.redirect("/threads/home");
})
app.listen(port,()=>{
    console.log("Connect to the server....");
})

app.get("/threads/edit/:id",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=> p.id === id);
    res.render("edit.ejs",{post});
})
app.patch("/threads/edit/:id",(req,res)=>{
    let {id} = req.params;
    let {content} = req.body;
    let post = posts.find((p) => p.id === id);
    post.content = content;
    res.redirect("/threads/home");
})
app.delete("/threads/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/threads/home");
})
