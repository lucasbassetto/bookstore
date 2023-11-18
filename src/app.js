import express from "express";

const app = express();
app.use(express.json());

const albums = [
  {
    id: 1,
    titulo: "AM"
  },
  {
    id: 2,
    titulo: "Favourite Worst Nightmare"
  }
]

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
  res.status(201).send("CD adicionado com sucesso!");
});

app.put("/albums/:id", (req, res) => {
  const index = findAlbum(req.params.id); 
  albums[index].titulo = req.body.titulo;
  res.status(200).json(albums[index]);
});

export default app;
