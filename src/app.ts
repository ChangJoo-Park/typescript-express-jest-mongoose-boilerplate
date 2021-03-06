import express from "express";
import mogran from "morgan";
import * as postController from "./controllers/posts";
import envConfig from "./helpers/env";
import logger from "./logger";

const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : "combined";

// Create Express server
const app = express();
app.set("port", envConfig.env.port || 8000);

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

app.get("/posts", postController.get);

export default app;
