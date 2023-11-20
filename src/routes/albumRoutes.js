import express from "express";
import AlbumController from "../controller/albumController.js";

const router = express.Router();

router.get("/albums", AlbumController.findAll);
router.get("/albums/search", AlbumController.findAlbumByFilter);
// router.get("/albums/search/genre", AlbumController.findAlbumByGenre);
// router.get("/albums/search/author-title", AlbumController.findAlbumByAuthorAndTitle);
router.get("/albums/:id", AlbumController.findById);
router.post("/albums", AlbumController.save);
router.put("/albums/:id", AlbumController.update);
router.delete("/albums/:id", AlbumController.delete);


export default router;