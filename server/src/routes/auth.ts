import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import SECRET_KEY from '../configs/secretkey';
import prisma from '../prisma';


const router: Router = express.Router();


// Rota de login
router.post('/login', async (req: Request, res: Response) => {
  	const {email, password } = req.body;
  	console.log(
		"pass: ", password, 
		"email: ", email
	);

	try {
      const user = await prisma.user.findUnique({ where: { email: email } })
      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' });
      console.log("Oia o token: ", token);
      res.status(201).json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Credenciais inválidas' });
      console.log(error);
    }
});

// Rota de logout
router.get('/logout', (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
          // Trate o erro aqui
          console.error('Erro ao destruir a sessão:', err);
        } else {
          // A sessão foi destruída com sucesso
          console.log('Sessão destruída com sucesso');
          res.redirect('/auth/login'); // Redireciona para a página de login, por exemplo
        }
    });      
});

export default router;
