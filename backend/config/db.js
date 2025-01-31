import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://deepsimran956:fDGaDHnAnPMcropd@cluster0.ll1ha.mongodb.net"
    )
    .then(() => console.log("DB connected "));
};
