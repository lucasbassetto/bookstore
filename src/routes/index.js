import express from "express";
import albums from "./albumRoutes.js";

// função para agrupar todas as rotas recebidas de albums (ponto de entrada para as rotas)
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send());

    app.use(express.json(), albums);
};

export default routes;