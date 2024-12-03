import express from "express";
import { registerPlayer, loginPlayer, getAllPlayers, deletePlayer, getPlayerById, updatePlayer } from "../controllers/player.controller.js";

const router = express.Router();

router.post("/register", registerPlayer);
router.post("/login", loginPlayer);
router.get("/", getAllPlayers);
router.delete("/:player_id", deletePlayer);
router.get("/:player_id", getPlayerById);
router.put("/:player_id", updatePlayer)

export default router;