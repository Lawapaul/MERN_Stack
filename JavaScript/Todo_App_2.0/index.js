const express=require('express');
const app=express();
const path=require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride('_method'))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended: true}));

let tasks=[];
let taskCount=0;


app.get("/todo",(req,res)=>{
    res.render("index.ejs",{tasks,taskCount});
})


app.post("/todo",(req,res)=>{
    let {task}=req.body;
    let obj={
        id: uuidv4(),
        content: task
    }
    tasks.push(obj);
    taskCount=taskCount+1;
    res.redirect("/todo");
});


app.get("/todo/edit/:id",(req,res)=>{
    let {id}=req.params;
    let task=tasks.find((p)=> id===p.id);
    res.render("update.ejs",{task});
})


app.patch("/todo/edit/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.task;
    let taskObj=tasks.find((p)=>p.id === id);
    taskObj.content=newContent;
    res.redirect("/todo");
})


app.delete("/todo/:id",(req,res)=>{
    let {id}=req.params;
    tasks=tasks.filter((p)=> id !== p.id);
    taskCount=taskCount-1;
    res.redirect("/todo");
})


app.delete("/todo/clearall",(req,res)=>{
    tasks=[];
    taskCount=0;
    res.redirect("/todo");
})

let port =4000;
app.listen(port,()=>{
    console.log("Listening to server.....")
})