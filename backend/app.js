import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from "./routes/admin.routes.js";
import playerRoutes from "./routes/player.routes.js";
import triviaRoutes from "./routes/trivia.routes.js";
import cors from "cors";

config();
connectDB();

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', adminRoutes);
app.use('/api', triviaRoutes)
app.use('/api/players', playerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Trivia running on http://localhost:${PORT}`)
});