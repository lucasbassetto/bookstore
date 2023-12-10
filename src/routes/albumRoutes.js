import express from "express";
import AlbumController from "../controller/albumController.js";
import { isAuthenticated } from "../util/auth.js";

const router = express.Router();

router.get("/albums", AlbumController.findAll);
router.get("/albums/search", AlbumController.findAlbumByFilter);
router.get("/albums/:id", AlbumController.findById);
router.post("/albums", isAuthenticated, AlbumController.save);
router.put("/albums/:id", AlbumController.update);
router.delete("/albums/:id", AlbumController.delete);


export default router;