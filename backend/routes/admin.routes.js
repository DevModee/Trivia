import express from 'express';
import { registerAdmin, getAdmins, deleteAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/admins/register', registerAdmin);
router.get('/admins', getAdmins);
router.delete('/admins/:id', deleteAdmin);


export default router; 
