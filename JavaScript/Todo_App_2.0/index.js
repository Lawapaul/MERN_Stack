const express=require('express');
const app=express();
const path=require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todo',
  password: 'shekhawat'
});

app.use(methodOverride('_method'))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended: true}));

let taskCount=0;
let port = 3000;


app.get("/todo",(req,res)=>{
    let q='select id,tasks from task';
    connection.query(q,(err,result)=>{
        if(err) throw err;
        res.render('index.ejs',{result,taskCount})
    })
    
})


app.post("/todo",(req,res)=>{
    let {task}=req.body;
    let obj=[[
        uuidv4(),
        task
    ]]
    let q ='insert into task (id,tasks) values ?'
    connection.query(q,[obj],(err,result)=>{
        if(err) throw err;
        taskCount=taskCount+1;
        res.redirect("/todo");
    })
    
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
    let q='delete from task where id = ?';
    connection.query(q,id,(err,result)=>{
        if (err) throw err;
        taskCount=taskCount-1;
        res.redirect("/todo");
    })
})


app.delete("/todo/clearall",(req,res)=>{
    let q='truncate table task';
    connection.query(q,(err,result)=>{
        if (err) throw err;
        taskCount=0;
        res.redirect("/todo");
    })
})

app.listen(port,()=>{
    console.log("Listening to server.....")
})