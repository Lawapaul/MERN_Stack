const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app=express();
var methodOverride = require('method-override')
const port = 8000;
app.use(methodOverride('_method'))
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'harshit_app',
    password: 'shekhawat'
  });

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
 
app.get("/",(req,res)=>{
    let q="select count(*) from user";
    connection.query(
        q, (err,result)=>{
            if(err) throw err;
            let count=result[0]['count(*)'];
            res.render("count.ejs",{count});
        }
    );
  
})

app.get("/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/show",(req,res)=>{
    let q="select id,username,email from user";
    connection.query(
        q, (err,result)=>{
            if(err) throw err;
            let data=result;
            res.render("show.ejs",{data});
        }
    );
})
app.post("/new",(req,res)=>{
    let {username,email,password} = req.body;
    let new_data=[uuidv4(),username,email,password]
    let q='insert into user(id,username,email,password) values (?)'
    connection.query(q,[new_data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    res.redirect('/show');
})
app.listen(port,()=>{
    console.log("Listening...");
})
app.delete("/:id",(req,res)=>{
    let {id} = req.params;
    let q=`delete from user where id = ?`;
    connection.query(q,[id],(err,result)=>{
        if(err){
            throw err;
        }
        res.redirect("/show");
    })
    
})