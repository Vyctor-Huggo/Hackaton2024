import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import crypto from 'crypto';
import authRouter from './routes/cadastro';
import cors from 'cors';

const app = express();

app.use(cors());

// Configuração do express-session
const secretKey = crypto.randomBytes(32).toString('hex');
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

// Rota principal
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Bem-vindo ao meu aplicativo Express com sessões!');
});

// Rotas de autenticação
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
