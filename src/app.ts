import express from "express";
import dotenv from 'dotenv';

dotenv.config();

// Create Express server
const app = express();

app.set("port", process.env.PORT || 8000);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

export default app;
