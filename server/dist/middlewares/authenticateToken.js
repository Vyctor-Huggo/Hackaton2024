"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const secretkey_1 = __importDefault(require("../configs/secretkey"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token ausente' });
    }
    jsonwebtoken_1.default.verify(token, secretkey_1.default, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
exports.default = exports.authenticateToken;
