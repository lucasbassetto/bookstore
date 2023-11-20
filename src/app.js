import express from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Error connection with MongoDB", error);
});

connection.once("open", () => {
  console.log("Connection with MongoDB was successful!");
});

const app = express();
routes(app);

export default app;
