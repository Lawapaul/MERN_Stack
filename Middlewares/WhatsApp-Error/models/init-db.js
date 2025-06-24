const mongoose = require('mongoose');
const User = require("./data-index");
async function main(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/crud');
}
User.insertMany([
    {from: "Alice",to: "bob",message: "How are you Bob?",date: new Date()},
    {from: "Charlie", to: "David", message: "Let's meet tomorrow at noon.",date: new Date()},
    {from: "Eve", to: "Frank",message: "Don't forget the meeting!",date: new Date()},
    {from: "Grace", to: "Heidi",message: "Happy Birthday, Heidi!", date: new Date()},
    {from: "Ivan", to: "Judy", message: "Can you send the report?",date: new Date()}
])
.then(()=>{
    console.log("Added Successfully")
})
.catch((err)=>{
    console.log(err);
});