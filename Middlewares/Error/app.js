let express= require("express");
const app = express();
const port = 3000;
const ExpressError = require("./ExpressError");

const check_err= (req,res,next)=>{
    let {access} = req.query;
    if(access === "true"){
        next();
    }
    throw new ExpressError(401,"Invalid! AccessDenied");
}; 
app.get("/err/token",check_err,(req,res)=>{
    res.send("Hello");

})
app.listen(port,()=>{
    console.log("Listening...")
})