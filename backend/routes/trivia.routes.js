import express from "express";
import { createTrivia, getAllTriviaDetails, getTriviaById, updateTrivia, deleteTrivia } from "../controllers/trivia.controller.js";

const router = express.Router();

router.post("/", createTrivia);
router.get("/", getAllTriviaDetails);
router.get("/:trivia_id", getTriviaById);
router.put("/:trivia_id", updateTrivia);
router.delete("/:trivia_id", deleteTrivia);

export default router;