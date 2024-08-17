import mongoose from "mongoose";

// Define the food schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // Image field as a string to store the filename or URL
});

// Check if the model already exists to avoid recompiling the model
const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;
