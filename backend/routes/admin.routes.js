import express from 'express';
import { registerAdmin, getAdmins, deleteAdmin, loginAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/admins/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/admins', getAdmins);
router.put('/update-password', updatePassword);


export default router; 