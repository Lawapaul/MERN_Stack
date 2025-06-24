const express = require('express');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb');
const port = 3030;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ✅ Correct MongoDB URI (includes authSource)
const mongo_url = "mongodb://root:root123@localhost:27017/?authSource=admin";
const client = new MongoClient(mongo_url);

app.get("/", (req, res) => {
    res.render("home"); // ✅ no .ejs
});

app.get("/ShowData", async (req, res) => {
    try {
        await client.connect(); // ✅ just connect the client
        const db = client.db('sample-db'); // Make sure this DB exists
        const users = await db.collection('users').find({}).toArray();
        console.log(users);
        res.json(users); // ✅ send to browser
    } catch (err) {
        console.error("MongoDB error:", err);
        res.status(500).send("Database error");
    }
});

app.listen(port, () => {
    console.log("Connected on http://localhost:" + port);
});