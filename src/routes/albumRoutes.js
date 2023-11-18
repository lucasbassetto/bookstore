import express from "express";
import AlbumController from "../controller/albumController.js";

const router = express.Router();

router.get("/albums", AlbumController.findAll);
router.get("/albums/:id", AlbumController.findById);
router.post("/albums", AlbumController.save);
router.put("/albums/:id", AlbumController.update);

export default router;