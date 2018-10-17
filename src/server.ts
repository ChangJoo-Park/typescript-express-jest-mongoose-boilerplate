import express from "express";
import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log("\tApp is running at http://localhost:%d", app.get("port"));
    console.log("\tPress CTRL-C to stop\n");
  });

export default server;
