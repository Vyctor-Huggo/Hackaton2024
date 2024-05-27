import express, { Request, Response, NextFunction } from 'express';
import SECRET_KEY from './configs/secretkey';

//middlewares
import authenticateToken from './middlewares/authenticateToken';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';

//importando rotas
import authRouter from './routes/auth';
import coisaRouter from './routes/coisa';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:3000', // Origem do frontend React
  credentials: true
}));

app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// Rotas de autenticação
app.use('/auth', authRouter);
app.use('/coisa', authenticateToken, coisaRouter);


// Rota Not Found
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

//Rota de Erro
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;

  res.status(err.status || 500);
  res.json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
