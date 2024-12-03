import Player from "../models/player.model.js";
import bcrypt from "bcrypt";

export const registerPlayer = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingPlayer = await Player.findOne({ username });
        if (existingPlayer) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPlayer = new Player({
            username,
            password: hashedPassword,
        });

        await newPlayer.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

export const loginPlayer = async (req, res) => {
    const { username, password } = req.body;

    try {
        const player = await Player.findOne({ username });
        if (!player) {
            return res.status(401).json({ message: "Invalid username or password" })
        }

        const isPasswordValid = await bcrypt.compare(password, player.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successfully", player });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

export const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

export const getPlayerById = async (req, res) => {
    const { user_id } = req.params;

    try {
        const player = await Player.findById(user_id);
        if (!player) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
};

export const deletePlayer = async (req, res) => {
    const { player_id } = req.params;

    try {
        const deletedPlayer = await Player.findByIdAndDelete(player_id);
        if (!deletedPlayer) {
            return res.status(404).json({ message: "Player not found" });
        }
        res.status(200).json({ message: "Player deleted successfully", player: deletedPlayer });
    } catch (error) {
        res.status(500).json({ message: "Error deleting player", error });
    }
};

export const updatePlayer = async (req, res) => {
    const { player_id } = req.params;
    const { username, password } = req.body;

    try {
        const player = await Player.findById(player_id);
        if (!user) {
            return res.status(404).json({ message: "Player not found" });
        }

        if (username) player.username = username;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            player.password = hashedPassword;
        }

        await user.save();
        res.status(200).json({ message: "Player updated successfully", json });
    } catch (error) {
        res.status(500).json({ message: "Error updtign player", error });
    }
};