import express, { Router, Request, Response } from 'express';
const router: Router = express.Router();

// Rota de login
router.post('/login', (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Nenhum JSON recebido na requisição' });
  }

  // Faça o que quiser com os dados JSON
  console.log('JSON recebido:', req.body);
  
  // Lógica de autenticação aqui  
  req.session.user = { id: 1, username: 'user@example.com' }; // Exemplo de usuário autenticado
  res.send('Login bem-sucedido!');
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
          res.redirect('/login'); // Redireciona para a página de login, por exemplo
        }
    });      
});

export default router;
