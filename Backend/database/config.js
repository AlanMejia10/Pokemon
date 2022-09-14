import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("dabase up and running");
  } catch (error) {
    console.log(error);
    throw new Error("Error while initializing database");
  }
};
