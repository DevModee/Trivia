import express from 'express';
import { registerAdmin, getAdmins, deleteAdmin, loginAdmin, updatePassword } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/', getAdmins);
router.put('/update-password', updatePassword);


export default router; 