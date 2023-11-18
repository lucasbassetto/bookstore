import express from "express";
import AlbumController from "../controller/albumController.js";

const router = express.Router();

router.get("/albums", AlbumController.findAll);

export default router;