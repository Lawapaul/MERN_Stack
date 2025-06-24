const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

const Schema_Orders = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
})
const Orders= new mongoose.model("Orders",Schema_Orders);
const Customer_Schema = new mongoose.Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Orders",
    }]
})
const Customer = new mongoose.model("Customer",Customer_Schema);

const addorder = async ()=>{
    let res= await Orders.insertMany([{
        name: "Chips",
        type: "Snacks",
        price: 20,
    },
    {
        name: "Icecream",
        type: "Desert",
        price: 50
    },
    {
        name: "Panner Tikka Masala",
        type: "Main Course",
        price: 350
    }]
    )
}
addorder();

const addCustomer = async()=>{
    const cust1=new Customer({
        name: "Harshit Singh Shekhawat",
    })
    let query = await Orders.findOne({price: 350});
    let query1 = await Orders.findOne({price: 20});
    cust1.orders.push(query._id);
    cust1.orders.push(query1._id);
    let result = await Customer.find({}).populate("orders");
    console.log(result);
    await cust1.save().then((res)=>{
    })
    .catch((err)=>{
        console.log(err);
    })
}
addCustomer();