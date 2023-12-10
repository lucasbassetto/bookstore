import express from "express";
import albums from "./albumRoutes.js";
import videoAlbums from "./videoAlbumRoutes.js";
import authors from "./authorRoutes.js";
import auth from "./authRoutes.js";
import install from "./install.js";

// função para agrupar todas as rotas recebidas de albums (ponto de entrada para as rotas)
const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send());

  app.use(express.json(), albums, authors, videoAlbums, auth, install);
};

export default routes;