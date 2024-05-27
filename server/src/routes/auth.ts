import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import SECRET_KEY from '../configs/secretkey';
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
      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' });
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
