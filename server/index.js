import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

const corsOptions = {
    origin: 'https://nodejs-chat-realtime.onrender.com',
    //origin: 'http://localhost:5173/',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/signup", async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body;

    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username, secret, email, first_name, last_name },
            { headers: { "Private-Key": process.env.SECRET_ID } }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.post("/login", async (req, res) => {
    const { username, secret } = req.body;

    try {
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": process.env.PROJECT_ID,
                "User-Name": username,
                "User-Secret": secret,
            },
            withCredentials: true,
        });
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
