let express= require("express");
const app = express();
const port = 3000;
const ExpressError = require('./ExpressError');

app.get("/admin",(req,res)=>{
    throw new ExpressError(404,"Access Not granted");
})
app.use("/admin",(err,req,res,next)=>{
    let {status,message} = err;
    res.status(status).send(message);
})

app.listen(port,()=>{
    console.log("Listening...")
})