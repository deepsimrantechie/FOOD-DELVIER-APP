import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food items
const addFood = async (req, res) => {
  let imageFilename;
  if (req.file) {
    imageFilename = req.file.filename;
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Image file is required" });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imageFilename,
  });

  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving food list" });
  }
};

// Remove food items
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    const imagePath = path.resolve(`uploads/${food.image}`);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(`Error deleting image file: ${err}`);
      }
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res
      .status(200)
      .json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listFood, removeFood };
