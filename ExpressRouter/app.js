const port = 3000;
const express = require("express");
const app = express();
const login = require("./routes/user.js");

app.use("/",login);

app.listen(3000,()=>{
    console.log("Connected...");
})