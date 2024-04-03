import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import cookieParser from "cookie-parser";
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
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000 !!!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
