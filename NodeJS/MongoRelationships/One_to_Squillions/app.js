const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

const User_Schema = new mongoose.Schema({
    name: String,
    email: String,
})
const users = new mongoose.model("users",User_Schema);
const Post_Schema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    }
})
const posts=new mongoose.model("posts",Post_Schema);
const addData = async () =>{
    const user1 = new users({
        name: "Harshit Singh Shekhawat",
        email: "harshitshekhawat501@gmail.com"
    })
    const post1 = new posts({
        content: "Hello World",
        likes: 10,
    })
    const post2 = new posts({
        content: "Bye Bye",
        likes: 20,
    })
    post1.user = user1;
    post2.user = user1;
    await user1.save();
    await post1.save();
    await post2.save();
}

const show = async ()=>{
    let result = await posts.findOne({likes: 20}).populate("user");
    console.log(result);
}
show();

