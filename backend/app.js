import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import indexRoutes from './routes/Admin.routes.js';

config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api', indexRoutes);

const PUERTO = process.env.PUERTO || 5000;
app.listen(PUERTO, () => {
    console.log(`Trivia corriendo en el puerto ${PUERTO}`)
});