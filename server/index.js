const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin:true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..."})
});

app.listen(4000, console.log("Server running on port 4000"));