import mongoose from "mongoose";
import chalk from "chalk";

const connectionString = process.env.DB_URL || "127.0.0.1:3000";

mongoose.set("returnOriginal", false);

mongoose.connect(connectionString).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.bold(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
