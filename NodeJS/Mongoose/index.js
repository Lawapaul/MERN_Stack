const mongoose = require('mongoose');
const { type } = require('os');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

main().then(()=>{
    console.log("Successfull");
})
.catch((err)=>{
    console.log("Error");
})

const User=new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    city:{
        type: String,
        enum: ["jodhpur","jaipur","delhi"]
    }
})
const Data = mongoose.model("User",User);
let user1= new Data({
    Name: "Harshit",
    age: 19,
    city: "jodhpur"
})
.save().then((res)=>{
})
.catch((err)=>{
    console.log(err);
})

Data.insertMany([
    {
        Name: "Rajani",
        age: 50,
        city: "jaipur"
    },
    {
        Name: "Gajraj",
        age: 60,
        city: "delhi"
    }
]).then((result)=>{
})

Data.findByIdAndUpdate("6803e9e49c49fe903d689047").then((res)=>{
    console.log(res);
})
