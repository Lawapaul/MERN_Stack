const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Recap');
}

const schema = new mongoose.Schema({
    from: String,
    to: String,
    message: String,
    date: String
})

const Data=mongoose.model("Data",schema);
module.exports = Data;