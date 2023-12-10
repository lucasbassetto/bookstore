import express from "express";
import AuthenticationController from "../controller/authController.js";

const router = express.Router();

router.post("/login", AuthenticationController.login);

export default router;