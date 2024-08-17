import express from "express";
import { addFood, listFood, removeFood } from "../controller/foodController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const foodRouter = express.Router();

// Ensure the uploads directory exists
const uploadsDir = path.resolve("uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Image storage engine configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Route to add food with image upload
foodRouter.post(
  "/add",
  upload.single("image"),
  (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    next();
  },
  addFood
);

// Route to list all food items
foodRouter.get("/list", listFood);

// Route to remove food item
foodRouter.post("/remove", removeFood);

export default foodRouter;
