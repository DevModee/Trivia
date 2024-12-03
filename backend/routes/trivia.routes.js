import express from "express";
import { createTrivia } from "../controllers/trivia.controller.js";

const router = express.Router();

router.post("/trivia", createTrivia);

export default router;