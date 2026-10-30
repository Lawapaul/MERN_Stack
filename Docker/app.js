const express = require('express');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb');
const port = 3030;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const mongo_url = "mongodb://root:root123@localhost:27017/";
const client = new MongoClient(mongo_url);

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ShowData", async (req, res) => {
    try {
        await client.connect();
        const db = client.db('sample-db'); 
        const users = await db.collection('users').find({}).toArray();
        console.log(users);
        res.json(users); 
        client.close();
    } catch (err) {
        console.error("MongoDB error:", err);
        res.status(500).send("Database error");
    }
});

app.post("/", async(req,res)=>{
    let {username,email,password}=req.body;
    try{
        await client.connect();
        const db=client.db("sample-db");
        const data=await db.collection("users").insertOne({username,email,password});
        console.log("Data Inserted");
        res.redirect("/");
        client.close();
    }
    catch(err){
        res.send(`Error Encountered: ${err}`);
    }
})
app.listen(port, () => {
    console.log("Connected Successfully...");
});