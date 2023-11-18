import express from "express";
import connectDatabase from "./config/dbconnect.js";
import album from "./model/Album.js";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Error connection with MongoDB", error);
});

connection.once("open", () => {
   console.log("Connection with MongoDB was successful!");
});

const app = express();
app.use(express.json());

app.get("/albums", async (req, res) => {
  const listAll = await album.find({});
  res.status(200).json(listAll);
});

app.get("/albums/:id", (req, res) => {
  const index = findAlbum(req.params.id);
  res.status(200).json(albums[index]);
});

app.post("/albums", (req, res) => {
  albums.push(req.body);
  res.status(201).send("Album adicionado com sucesso!");
});

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

// mongodb+srv://admin:<password>@cluster0.o0pu6wu.mongodb.net/?retryWrites=true&w=majority
