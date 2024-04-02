import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Get directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env") });
mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("connected to mongo server");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000 !!!!");
});
