import mongoose from "mongoose";

const { Schema, model } = mongoose;

const playerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    total_points: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

const Player = model("Player", playerSchema);

export default Player;