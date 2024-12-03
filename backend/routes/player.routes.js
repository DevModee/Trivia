import express from "express";
import { registerPlayer, loginPlayer, getAllPlayers } from "../controllers/player.controller.js";

const router = express.Router();

router.post("/register", registerPlayer);
router.post("/login", loginPlayer);
router.get("/", getAllPlayers);

export default router;