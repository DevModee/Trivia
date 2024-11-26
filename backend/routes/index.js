import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post('/create-admin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = new Admin({ username, password });
        await admin.save();
        res.status(201).json({ message: 'Administrador creado', admin });
    } catch (error) {
        console.error('Error al crear administrador:', error);
        res.status(400).json({ message: 'Error al crear el Administrador', error });
    }
});

export default router; 
