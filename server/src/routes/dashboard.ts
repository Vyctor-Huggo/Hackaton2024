// src/routes/dashboard.ts
import express from 'express';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = express.Router();

router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Bem-vindo ao Dashboard!' });
});

export default router;
