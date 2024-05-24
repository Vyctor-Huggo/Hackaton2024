import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRouter from './routes/auth';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Origem do frontend React
  credentials: true
}));

app.use(bodyParser.json());

// Configuração do express-session
const secretKey = crypto.randomBytes(32).toString('hex');
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

// Rotas de autenticação
app.use('/auth', authRouter);

// Rota principal
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Bem-vindo ao meu aplicativo Express com sessões!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
