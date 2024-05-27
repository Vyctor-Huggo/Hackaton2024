import jwt, { VerifyErrors } from 'jsonwebtoken';
import SECRET_KEY from '../configs/secretkey';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    user?: any;
}

const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : undefined;

    if (!token) {
        return res.status(401).json({ message: 'Token ausente' });
    }

    jwt.verify(token, SECRET_KEY, (err: VerifyErrors | null, user: any) => {
        if (err) {
            // Se houver um erro na verificação do token
            console.error('Erro na verificação do token:', err);
            // Trate o erro de acordo com a sua lógica de negócios
            // Por exemplo, você pode retornar um status 401 (Não autorizado) para indicar que o token é inválido
            return res.status(401).json({ message: 'Token inválido' });
          }

        req.user = user;    
        next();
    });
};

export default authenticateToken;