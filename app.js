const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js')

dotenv.config();
connectDB();

const app = express();

const PUERTO = process.env.PUERTO || 5000;
app.listen(PUERTO, () => {
    console.log(`Trivia corriendo en el puerto ${PUERTO}`)
});