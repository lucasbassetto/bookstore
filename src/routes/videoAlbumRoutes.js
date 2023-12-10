import express from "express";
import VideoAlbumController from "../controller/videoAlbumController.js";
import { isAuthenticated } from "../util/auth.js";

const router = express.Router();

router.get("/videoAlbums", VideoAlbumController.findAll);
router.get("/videoAlbums/search", VideoAlbumController.findAlbumByFilter);
router.get("/videoAlbums/:id", VideoAlbumController.findById);
router.post("/videoAlbums", isAuthenticated, VideoAlbumController.save);
router.put("/videoAlbums/:id", VideoAlbumController.update);
router.delete("/videoAlbums/:id", VideoAlbumController.delete);


export default router;