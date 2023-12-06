import express from "express";
import VideoAlbumController from "../controller/videoAlbumController.js";

const router = express.Router();

router.get("/videoAlbums", VideoAlbumController.findAll);
router.get("/videoAlbums/search", VideoAlbumController.findAlbumByFilter);
router.get("/videoAlbums/:id", VideoAlbumController.findById);
router.post("/videoAlbums", VideoAlbumController.save);
router.put("/videoAlbums/:id", VideoAlbumController.update);
router.delete("/videoAlbums/:id", VideoAlbumController.delete);


export default router;