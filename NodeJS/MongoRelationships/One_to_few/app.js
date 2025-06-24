import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const User = new mongoose.Schema({
    name: String,
    address: [
        {
            City: String,
            Country: String
        }
    ]
});
const Data=new mongoose.model("Data",User);
const user1= new Data({
    name: "Harshit",
})
user1.address.push({City: "Jodhpur",Country: "India"});
await user1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})