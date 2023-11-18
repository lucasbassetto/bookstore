import express from "express";
import AuthorController from "../controller/authorController.js";

const router = express.Router();

router.get("/authors", AuthorController.findAll);
router.get("/authors/:id", AuthorController.findById);
router.post("/authors", AuthorController.save);
router.put("/authors/:id", AuthorController.update);
router.delete("/authors/:id", AuthorController.delete);

export default router;