import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';

config();
connectDB();

const app = express();

const PUERTO = process.env.PUERTO || 5000;
app.listen(PUERTO, () => {
    console.log(`Trivia corriendo en el puerto ${PUERTO}`)
});