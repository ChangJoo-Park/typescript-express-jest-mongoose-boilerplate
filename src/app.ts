import express from "express";

// Create Express server
const app = express();

app.set("port", process.env.PORT || 8000);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

export default app;
