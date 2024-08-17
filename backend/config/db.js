import mongoose, { mongo } from "mongoose";
//npmimport foodModel from "../models/foodModel.js";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://deepsimran956:Narmis28@cluster0.tiutjk5.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected "));
};
