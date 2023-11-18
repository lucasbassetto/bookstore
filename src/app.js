import express from "express";
import connectDatabase from "./config/dbconnect.js";

const connection = await connectDatabase();

connection.on("error", (erro) => {
  console.error("Erro de conexão ao MongoDB", erro);
});

connection.once("open", () => {
   console.log("Conexão com MongoDB realizada com sucesso!");
});

const app = express();
app.use(express.json());

function findAlbum(id) {
  return albums.findIndex(albums => {
    return albums.id === Number(id);
  });
}

app.get("/albums", (req, res) => {
  res.status(200).json(albums);
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
