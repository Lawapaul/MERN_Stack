/* Welcome to my page
--> This project secure's the webpage by adding a layer of authentication of security. It ask the user to input username and password. 
    If the credential's are correct it redirect's to the desired page.
--> Install Express package using <npm install express>
--. Install Body-Parser package using <npm install body-parser>
*/

const express=require("express")
const bodyParser=require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

var authInUser = false;

function password(req,res,next){
    const pass = req.body.password;
    if(pass ==='admin'){
        authInUser = true;
    }
    next();

}
app.use(password)

app.post("/check",function(req,res){
    if (authInUser===true){
        res.sendFile(__dirname + "/Work.html")
    }else{
        res.sendFile(__dirname + "/index.html")
    }
})


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000,function(){
    console.log("Server Established Successfully......")
});
