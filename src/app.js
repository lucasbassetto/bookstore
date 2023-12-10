import express from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger_output.json" assert { type: 'json' };

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Error connection with MongoDB", error);
});

connection.once("open", () => {
  console.log("Connection with MongoDB was successful!");
});

const app = express();
routes(app);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
