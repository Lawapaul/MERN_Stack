let express= require("express");
const app = express();
const port = 3000;


app.use("/:test",(req,res,next)=>{
    let {test} = req.params;
    if(test == "grant"){
        next();
    }
    else{
        res.send("Access Denied");
    }
})
app.get("/grant",(req,res)=>{
    res.send("Hello");
})
app.listen(port,()=>{
    console.log("Listening...")
})