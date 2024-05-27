import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import SECRET_KEY from '../configs/secretkey';
import prisma from '../prisma';


const router: Router = express.Router();


// Rota de login
router.post('/oiii', async (req: Request, res: Response) => {
  	res.send("Autenticado FDP");
});

export default router;
