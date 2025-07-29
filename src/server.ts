import moongoose from "mongoose";
import app from "./app";
import config from "./config/config";
import mongoose from "mongoose";
import { log } from "console";

mongoose
  .connect(config.databaseUrl)
  .then(() => {
    console.log(`Database connected successfully`);
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed: ${error.message}`);
  });
