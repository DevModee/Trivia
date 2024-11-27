import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import adminRoutes from "./routes/admin.routes.js"

config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Trivia running on http://localhost:${PORT}`)
});