import express from "express";
import app from "./app";
import logger from './logger';

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    logger.info("\tApp is running at http://localhost:%d", app.get("port"));
    logger.info("\tPress CTRL-C to stop\n");
  });

export default server;
