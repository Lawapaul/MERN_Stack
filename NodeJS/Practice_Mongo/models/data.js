const mongoose = require('mongoose');
const Data = require("./basic");

async function main(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/Recap');
}
main().then(()=>{
    console.log("Sucessfull..");
})
.catch((err)=>{
    console.log(err);
})

Data.insertMany([
    {from: "Alice", to: "Bob", message: "How are you Bob?", date: new Date()},
    {from: "Charlie", to: "David", message: "Let's meet tomorrow", date: new Date()}
])
.then(() => {
    console.log("Added Successfully")
})
.catch((err) => {
    console.log(err);
});
