import express from 'express';
import { registerAdmin, getAdmins, deleteAdmins } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.get('/admins', getAdmins);
router.delete('/admins/:id', deleteAdmin);


export default router; 
