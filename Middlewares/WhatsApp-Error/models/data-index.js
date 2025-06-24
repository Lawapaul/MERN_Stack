const mongoose = require('mongoose');
async function main(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/crud');
}
main()
.then(()=>{
    console.log("Successful");
})
.catch((err)=>{
    console.log("Error");
})

const schema = mongoose.Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type:Date
    }
})

const User = new mongoose.model("User",schema)
module.exports = User;