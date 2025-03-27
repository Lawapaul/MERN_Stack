const express=require('express'); 
const app=express();
const path=require('path');
var methodOverride = require('method-override')
const {v4: uuidv4} = require('uuid');
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
 
app.use(methodOverride('_method'))
let posts=[
    {
        id: uuidv4(),
        username: "HarshitShekhawat",
        content: "I love Coding",
    },
    {
        id: uuidv4(),
        username: "Lawapaul",
        content: "Hardwork is the key to success"
    },
    {
        id: uuidv4(),
        username: "Surfer.w96",
        content: "I got selected for my first internship"
    }
];
const port=8000;
app.listen(port,()=>{
    console.log("Listing to port: 8000");
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
}) 

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs")
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post=posts.find((p)=>
        p.id === id
    );
    res.render("show.ejs",{ post });
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let obj={
        id:uuidv4(),
        username:username,
        content:content
    };
    posts.push(obj);
    res.redirect("/posts");
})
app.patch("/posts/:id",(req,res)=>{
    let {id} =req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>
        p.id === id
    );
    post.content = newContent;
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>p.id === id);
    res.render("edit.ejs",{post});
})

