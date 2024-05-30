import SECRET_KEY from '../configs/secretkey';
import { Request, Response, NextFunction } from 'express';
import jwt, {VerifyErrors } from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
    user?: any;
}

export const authenticateToken = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token ausente' });
    }

    jwt.verify(token, SECRET_KEY, (err: VerifyErrors | null, user: any) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }

        req.user = user;
        next();
    });
};

export default authenticateToken;