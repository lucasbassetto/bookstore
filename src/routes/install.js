import express from "express";
import InstallController from "../controller/installController.js";

const router = express.Router();

router.get("/install", InstallController.install);

export default router;