import express, { Router, Request, Response } from 'express';
import prisma from '../prisma';
const router: Router = express.Router();

// Rota de login
router.post('/login', async (req: Request, res: Response) => {
  	const { username, email, password } = req.body;
  	console.log(
		'Received auth request with username: ', username, 
		" with pass: ", password, 
		" with email: ", email
	);

	try {
        const user = await prisma.user.create({
			data: {
			  email: email,
			  name: username,
			  password: password
			},
		  })
        res.status(201).json(JSON.stringify(user));
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the user' });
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
