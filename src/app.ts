import dotenv from "dotenv";
import express from "express";
import mogran from "morgan";
import logger from "./logger";

dotenv.config();

const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

// Create Express server
const app = express();
app.set("port", process.env.PORT || 8000);

app.use(
    mogran(morganFormat, {
      skip(req, res) {
        return res.statusCode < 400;
      },
      stream: process.stderr,
    }),
  );

app.use(
    mogran(morganFormat, {
        skip(req, res) {
        return res.statusCode >= 400;
        },
        stream: process.stdout,
    }),
);

app.get("/", (req, res) => {
    logger.info("hello world");
    res.status(200).send("Hello World");
});

export default app;
