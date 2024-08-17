/*import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config

const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();
//api end points
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

//
app.get("/", (req, res) => {
  res.send("API WORKING ");
});

//PORT
app.listen(port, () => {
  console.log(`Server Stated on http://localhost${port}`);
});
*/
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
//import orderRouter from "./routes/orderRoute.js";

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

// API end points
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
//app.use("/api/order", orderRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
