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

// app.get("/albums/:id", (req, res) => {
//   const index = findAlbum(req.params.id);
//   res.status(200).json(albums[index]);
// });

app.put("/albums/:id", (req, res) => {
  const index = findAlbum(req.params.id); 
  albums[index].titulo = req.body.titulo;
  res.status(200).json(albums[index]);
});

app.delete("/albums/:id", (req, res) => {
  const index = findAlbum(req.params.id);
  albums.splice(index, 1);
  res.status(200).send("Album removido com sucesso!");
});

export default app;

