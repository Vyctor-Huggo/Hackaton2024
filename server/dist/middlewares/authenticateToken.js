"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretkey_1 = __importDefault(require("../configs/secretkey"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : undefined;
    if (!token) {
        return res.status(401).json({ message: 'Token ausente' });
    }
    jsonwebtoken_1.default.verify(token, secretkey_1.default, (err, user) => {
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
exports.default = authenticateToken;
